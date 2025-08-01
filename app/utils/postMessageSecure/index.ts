import { generateId } from "lib";

const MESSAGE_TYPE = 'application/x-postmate-v1+json';
const MAX_HANDSHAKE_ATTEMPTS = 50;
const HANDSHAKE_RETRY_INTERVAL_MS = 100;

const generateMessageId = (): string => generateId();

const isDevelopment = (): boolean => process.env.NODE_ENV !== 'production';

const log = (...args: unknown[]): void => {
  if (isDevelopment() && ParentChanel.debug) {
    console.log('[postMessageSecure]', ...args);
  }
};

const resolveOrigin = (url: string): string => {
  try {
    return new URL(url).origin;
  } catch {
    return url || window.location.origin;
  }
};


const resolveValue = <T extends Record<string, any>, K extends keyof T>(
  model: T,
  property: K
): Promise<T[K]> => {
  const unwrappedContext =
    typeof model[property] === 'function'
      ? (model[property] as () => T[K])()
      : model[property];

  return ParentChanel.Promise.resolve(unwrappedContext);
};

const VALID_MESSAGE_TYPES = new Set([
  'handshake',
  'handshake-reply',
  'call',
    'exec',
  'emit',
  'reply',
  'request',
]);

function sanitizeMessage(
  event: MessageEvent,
  allowedOrigin: string | boolean,
  token: string
): boolean {


  
  if (allowedOrigin && typeof allowedOrigin === 'string' && event.origin !== allowedOrigin) return false;
  if (!event.data || event.data.type !== MESSAGE_TYPE || event.data.token !== token) return false;
  if (!VALID_MESSAGE_TYPES.has(event.data.postmate)) return false;
  return true;
}

function getChildWindow(frame: HTMLIFrameElement): { window: Window | null; valid: boolean } {
  // @ts-expect-error contentWindow may be null, fallback to contentDocument?.parentWindow for older browsers
  const win = frame.contentWindow ?? frame.contentDocument?.parentWindow ?? null;
  return { window: win, valid: win !== null };
}

function getParentWindow(): { window: Window | null; valid: boolean } {
  const win = window.opener ?? (window !== window.parent ? window.parent : null);
  return { window: win, valid: win !== null };
}

type Callback<T = any> = (data?: T) => void;

interface CallbackMap {
  [eventName: string]: Callback[];
}

interface ParentAPIOptions {
  child: Window | null;
  targetOrigin: string;
  parent: Window;
  token: string;
  childOrigin: string;
   messageQueue: any[];
  model: Record<string, any>;
}

export class ParentAPI {
    private model: Record<string, any>;
  private child: Window | null = null;
  private parent: Window;
  private token: string;
  private childOrigin: string;
  private events: CallbackMap = {};
  private messageQueue: any[] = [];
private boundHandleMessage: (event: MessageEvent<any>) => void;

  constructor(options: ParentAPIOptions) {
    this.token = options.token;
    this.parent = options.parent;
    this.childOrigin = options.childOrigin;
    this.child = options.child;
         this.model = options.model;
    this.events = {};
    this.messageQueue = options.messageQueue;

    log('Parent: Registering API');
    log('Parent: Awaiting messages...');


 
this.boundHandleMessage = this.handleMessage.bind(this);
this.parent.addEventListener('message', this.boundHandleMessage, false);

  }

    private handleMessage(event: MessageEvent): void {
  if (!sanitizeMessage(event, this.childOrigin, this.token)) return;

  log('Parent: received an event', event);

  const { property, uid, data, postmate, value = {} } = event.data || {};

        const replySender =
    typeof event.source?.postMessage === 'function' ? event.source : this.child;
  const replyOrigin = event.origin || this.childOrigin;


  switch (postmate) {




         case 'handshake': {
          log('Parent: Received handshake from Child in internal api');

    
          const msg = {
              postmate: 'handshake-reply',
              type: MESSAGE_TYPE,
              token: this.token,
          }


              if (replySender) {
          (replySender as Window).postMessage(msg, replyOrigin as string);
        } else {
          this.messageQueue.push(msg);
        }


          log('Parent: Sending handshake reply to Child');

  
        }



        case 'exec': {
  if (property in this.model && typeof this.model[property] === 'function') {

    ParentChanel.Promise.resolve(this.model[property](data))
      .then((response) => {
        const message = {
          property,
          postmate: 'reply',
          type: MESSAGE_TYPE,
          uid,
          response,
          success: true,
          token: this.token
        };




        if (replySender) {
          (replySender as Window).postMessage(message, replyOrigin as string);
        } else {
          this.messageQueue.push(message);
        }



      })
      .catch((error) => {
        const message = {
          property,
          postmate: 'reply',
          type: MESSAGE_TYPE,
          uid,
          success: false,
          error: String(error),
          token: this.token
        };

           if (replySender) {
          (replySender as Window).postMessage(message, replyOrigin as string);
        } else {
          this.messageQueue.push(message);
        }
      });
  }

  break;
}


    case 'call': {

         if (property in this.model && typeof this.model[property] === 'function') {
          this.model[property](data)
        }
      break;
    }

    case 'emit': {
      const callbacks = this.events?.[value.name];
      if (Array.isArray(callbacks)) {
        callbacks.forEach(cb => cb.call(this, value.data));
      }
      break;
    }

    case 'request': {


      resolveValue(this.model, property).then(resolvedValue => {
        const message = {
          property,
          postmate: 'reply',
          type: MESSAGE_TYPE,
          uid,
          value: resolvedValue,
          token: this.token
        };

        if (replySender) {
          (replySender as Window).postMessage(message, replyOrigin as string);
        } else {
          this.messageQueue.push(message);
        }
      });
      break;
    }

    default:
      // Ignored unknown message types
      break;
  }
}
  private flushQueue(): void {
    if (!this.child) return;
    this.messageQueue.forEach(msg => this.child!.postMessage(msg, this.childOrigin));
    this.messageQueue.length = 0;
  }




  reset() {

  }

  /**
   * Change the iframe/window used for communication.
   * Flushes the message queue on success.
   */
  setIframe(iframe: HTMLIFrameElement): boolean {
    if (this.child) {
      log('[ParentAPI] Iframe already set');
      // return true;
    }
    const { window, valid } = getChildWindow(iframe);
    if (valid) {
      this.child = window;
      this.flushQueue();



         this.child!.postMessage({
              postmate: 'handshake-reply',
              type: MESSAGE_TYPE,
              token: this.token,
            }, this.childOrigin);


      return true;
    }
    log('[ParentAPI] Invalid iframe or contentWindow not accessible.');
    return this.child ? true : false;
  }


    /**
   * Emit an event to the child window.
   */
  emit(name: string, data?: any): void {
     log(`Parent: Emitting Event "${name}"`, data)


        const message = {
       postmate: 'emit',
      type: MESSAGE_TYPE,
      value: { name, data },
      token: this.token,
      };

      if (this.child) {
        this.child.postMessage(message, this.childOrigin);
      } else {
        this.messageQueue.push(message);
      }
  }






    get (property: string) {
      return new ParentChanel.Promise((resolve) => {
        // Extract data from response and kill listeners
        const uid = generateMessageId()
        const transact = (e: MessageEvent) => {
          if (e.data.uid === uid && e.data.postmate === 'reply') {
            this.parent.removeEventListener('message', transact, false)
            resolve(e.data.value)
          }
        }
  
        // Prepare for response from Child...
        this.parent.addEventListener('message', transact, false)
  
        // Then ask child for information


        const message = {
              postmate: 'request',
          type: MESSAGE_TYPE,
          property,
          uid,
          token: this.token
        }
              if (this.child) {
       this.child.postMessage(message, this.childOrigin)
      } else {
        this.messageQueue.push(message);
      }


      })
    }
  
    

exec<T = any>(
  property: string,
  data: Record<string, any>
): Promise<{ success?: boolean; response?: T; error?: any }> {
  return new ParentChanel.Promise((resolve) => {
        // Extract data from response and kill listeners
        const uid = generateMessageId()
        const transact = (e: MessageEvent) => {
          if (e.data.uid === uid && e.data.postmate === 'reply') {
            this.parent.removeEventListener('message', transact, false)


             resolve({success: e.data.success, response: e.data.response, error: e.data.error})

  
            
          }
        }
  
        // Prepare for response from Child...
        this.parent.addEventListener('message', transact, false)
  
        // Then ask child for information



        const message = {
           postmate: 'exec',
          type: MESSAGE_TYPE,
          property,
          uid,
          data,
          token: this.token
        }
              if (this.child) {
       this.child.postMessage(message, this.childOrigin)
      } else {
        this.messageQueue.push(message);
      }


      })
    }





    call (property: string, data: Record<string, any>) {



      // Send information to the child


      const message = {
             postmate: 'call',
        type: MESSAGE_TYPE,
        property,
        data, 
        token: this.token
      }

         if (this.child) {
       this.child.postMessage(message, this.childOrigin)
      } else {
        this.messageQueue.push(message);
      }



   
    }



  /**
   * Listen to events emitted by the child.
   */
  on(eventName: string, callback: Callback): void {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(callback);
  }

  /**
   * Cleanup event listeners.
   */
  destroy(): void {
    this.parent.removeEventListener('message', this.boundHandleMessage, false);
    this.events = {};
    this.messageQueue = [];
    this.child = null;
  }
}

interface ChildAPIOptions {
  child: Window;
  parent: Window;
  token: string;
  parentOrigin: string;
  model: Record<string, any>
}

export class ChildAPI {
  private model: Record<string, any>;
  private parent: Window;
  private child: Window;
  private token: string;
    private events: CallbackMap = {};
    private messageQueue: any[] = [];
  private parentOrigin: string;
private boundHandleMessage: (event: MessageEvent<any>) => void;



  constructor(options: ChildAPIOptions) {
    this.parent = options.parent;
    this.child = options.child;
    this.token = options.token;
    this.parentOrigin = options.parentOrigin;
     this.model = options.model;
    this.events = {};
    this.messageQueue = [];
   

    
    log('Child: Registering API');
    log('Child: Awaiting messages...');

    this.boundHandleMessage = this.handleMessage.bind(this);
this.child.addEventListener('message', this.boundHandleMessage, false);



  }

   private handleMessage(event: MessageEvent): void {
  if (!sanitizeMessage(event, this.parentOrigin, this.token)) return;

  log('Child: received an event', event);

  const { property, uid, data, postmate, value = {} } = event.data || {};

          const replySender =
    typeof event.source?.postMessage === 'function' ? event.source : this.parent;
  const replyOrigin = event.origin || this.parentOrigin;

  switch (postmate) {


        
case 'exec': {
  if (property in this.model && typeof this.model[property] === 'function') {

    ParentChanel.Promise.resolve(this.model[property](data))
      .then((response) => {
        const message = {
          property,
          postmate: 'reply',
          type: MESSAGE_TYPE,
          uid,
          response,
          success: true,
          token: this.token
        };

        (replySender as Window).postMessage(message, replyOrigin as string);
      })
      .catch((error) => {
        const message = {
          property,
          postmate: 'reply',
          type: MESSAGE_TYPE,
          uid,
          success: false,
          error: String(error),
          token: this.token
        };

        (replySender as Window).postMessage(message, replyOrigin as string);
      });
  }

  break;
}


    case 'call': {

         if (property in this.model && typeof this.model[property] === 'function') {
          this.model[property](data)
        }
      break;
    }

    case 'emit': {
      const callbacks = this.events?.[value.name];
      if (Array.isArray(callbacks)) {
        callbacks.forEach(cb => cb.call(this, value.data));
      }
      break;
    }



    

    case 'request': {



      resolveValue(this.model, property).then(resolvedValue => {
        const message = {
          property,
          postmate: 'reply',
          type: MESSAGE_TYPE,
          uid,
          value: resolvedValue,
          token: this.token
        };

       
          (replySender as Window).postMessage(message, replyOrigin as string);
  
      });
      break;
    }

    default:
      // Ignored unknown message types
      break;
  }
}






    get (property: string) {
      return new ParentChanel.Promise((resolve) => {
        // Extract data from response and kill listeners
        const uid = generateMessageId()
        const transact = (e: MessageEvent) => {
          if (e.data.uid === uid && e.data.postmate === 'reply') {
            this.child.removeEventListener('message', transact, false)
            resolve(e.data.value)
          }
        }
  
        // Prepare for response from Child...
        this.child.addEventListener('message', transact, false)
  
        // Then ask child for information
        this.parent.postMessage({
          postmate: 'request',
          type: MESSAGE_TYPE,
          property,
          uid,
          token: this.token
        }, this.parentOrigin)
      })
    }
  




exec<T = any>(
  property: string,
  data: Record<string, any>
): Promise<{ success?: boolean; response?: T; error?: any }> {
  return new ParentChanel.Promise((resolve) => {
        // Extract data from response and kill listeners
        const uid = generateMessageId()
        const transact = (e: MessageEvent) => {
          if (e.data.uid === uid && e.data.postmate === 'reply') {
            this.child.removeEventListener('message', transact, false)


             resolve({success: e.data.success, response: e.data.response, error: e.data.error})

  
            
          }
        }
  
        // Prepare for response from Child...
        this.child.addEventListener('message', transact, false)
  
        // Then ask child for information
        this.parent.postMessage({
          postmate: 'exec',
          type: MESSAGE_TYPE,
          property,
          uid,
          data,
          token: this.token
        }, this.parentOrigin)
      })
    }





    call (property: string, data: Record<string, any>) {
      // Send information to the child
      this.parent.postMessage({
        postmate: 'call',
        type: MESSAGE_TYPE,
        property,
        data,
        token: this.token
      }, this.parentOrigin)
    }






   /**
   * Listen to events emitted by the parent.
   */
  on(eventName: string, callback: Callback): void {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(callback);
  }


  
  /**
   * Emit an event to the parent window.
   */
  emit(name: string, data?: any): void {
     log(`Child: Emitting Event "${name}"`, data)

    this.parent.postMessage({
      postmate: 'emit',
      type: MESSAGE_TYPE,
      value: { name, data },
      token: this.token,
    }, this.parentOrigin);
  }

    destroy () {

       this.child.removeEventListener('message', this.boundHandleMessage, false);
    this.events = {};
    this.messageQueue = [];


       

    }
}

export class ParentChanel {
  static debug = false; // eslint-disable-line no-undef

  static Promise = (() => {
    try {
      // If window exists, use native Promise
      return typeof window !== 'undefined' && window.Promise ? window.Promise : Promise;
    } catch {
      return Promise;
    }
  })();

  private messageQueue: any[];
  private child: Window | null = null;
  private parent: Window = window;
  private token: string;
  private targetOrigin: string;
  private childOrigin!: string;
  private model: Record<string, any>;
  private api?: ParentAPI;

  constructor({
    frame = null,
    token,
    url,
        model,
        
  }: {
    frame?: HTMLIFrameElement | null;
    url: string;
    token: string;
      model?: Record<string, any>;
  }) {
    if (!token) throw new Error('Token is required to create a Postmate instance.');

    this.token = token;
    this.targetOrigin = resolveOrigin(url);

    if (frame) {
      const { window, valid } = getChildWindow(frame);
      if (valid) this.child = window;
    }

    this.model = model || {}
    this.messageQueue = [];
  }

  /**
   * Await the handshake from the child frame, then resolve with ParentAPI.
   */
  awaitHandshake(): Promise<ParentAPI> {
    return new ParentChanel.Promise((resolve, reject) => {
      const replyHandler = (event: MessageEvent) => {
     

        if (!sanitizeMessage(event, this.targetOrigin, this.token)) return;

        if (event.data.postmate === 'handshake') {
          log('Parent: Received handshake from Child');

          this.parent.removeEventListener('message', replyHandler, false);

          this.childOrigin = event.origin || this.targetOrigin;

          log('Parent: Saving Child origin', this.childOrigin);

          if (event.source && typeof event.source.postMessage === 'function') {
            this.child = event.source as Window;
          }

          const message = {
              postmate: 'handshake-reply',
              type: MESSAGE_TYPE,
              token: this.token,
          }
          if (this.child) {
            this.child.postMessage({
          message
            }, this.childOrigin);
          } else {
            this.messageQueue.push(message)
          }

          log('Parent: Sending handshake reply to Child');



        this.api = new ParentAPI({
            targetOrigin: this.targetOrigin,
            parent: this.parent,
            token: this.token,
            child: this.child,
            childOrigin: this.childOrigin,
             model: this.model,
             messageQueue: this.messageQueue
        });

        resolve(this.api);


  
        }
      };

        log('Parent: waiting handshake from child, expecting origin', this.targetOrigin);
      this.parent.addEventListener('message', replyHandler, false);
    });
  }

      destroy () {
        this.api?.destroy?.();
     this.messageQueue = [];
  this.child = null;
   this.api = undefined;
    }
}

export class ChildChanel {
  private targetOrigin: string;
  private child: Window = window;
  private parent: Window;
  private token: string;
  private parentOrigin: string;
  private model: Record<string, any>;
  private api?: ChildAPI;

 constructor({ url, token, model }: { url: string; token: string; model?: Record<string, any>; }) {
    this.token = token;
    this.targetOrigin = resolveOrigin(url);
    this.parentOrigin = this.targetOrigin;
    this.model = model || {};

    const { window: parentWindow, valid } = getParentWindow();

    if (!valid || !parentWindow) {
      throw new Error('No parent found');
    }
    this.parent = parentWindow;
  }

  /**
   * Send handshake requests until a reply is received or max attempts reached.
   */
  sendHandshake(): Promise<ChildAPI> {
    let attempts = 0;
    let retryInterval: ReturnType<typeof setInterval>;

    return new ParentChanel.Promise((resolve, reject) => {
      const handshakeReplyHandler = (event: MessageEvent) => {

         


        if (!sanitizeMessage(event, this.parentOrigin, this.token)) return;

        if (event.data.postmate === 'handshake-reply') {


          clearInterval(retryInterval);

          log('Child: Received handshake reply from Parent');

          this.child.removeEventListener('message', handshakeReplyHandler, false);

          this.parentOrigin = event.origin;

          log('Child: Saving Parent origin', this.parentOrigin);

          this.api = new ChildAPI({
            child: this.child,
            parent: this.parent,
            token: this.token,
            parentOrigin: this.parentOrigin,
            model: this.model
          });

          resolve(this.api);


        }
      };
        log('Child: waiting handshake-reply from parent, expecting origin', this.targetOrigin);
      this.child.addEventListener('message', handshakeReplyHandler, false);

      const sendHandshakeAttempt = () => {
        attempts++;
        log(`Child: Sending handshake attempt ${attempts}`);

        this.parent.postMessage({
          postmate: 'handshake',
          type: MESSAGE_TYPE,
          token: this.token,
        }, this.parentOrigin);

        if (attempts >= MAX_HANDSHAKE_ATTEMPTS) {
          clearInterval(retryInterval);
          reject(new Error('Failed handshake after max attempts'));
        }
      };

      sendHandshakeAttempt();
      retryInterval = setInterval(sendHandshakeAttempt, HANDSHAKE_RETRY_INTERVAL_MS);
    });
  }

    destroy () {
        this.api?.destroy?.();
  this.api = undefined;
    }
}