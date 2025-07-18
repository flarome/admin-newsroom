// utils/postMessageSecure.ts
export interface IMessage<T = any> {
  type: string;
  payload?: T;
  token: string;
}

export type MessageHandler<T = any> = (payload: T) => void;

export interface IMessageChannel {
  send: <T = any>(type: string, payload?: T) => void;
  on: <T = any>(type: string, callback: MessageHandler<T>) => void;
  off: (type: string) => void;
  setTargetWindow: (targetWindow: Window) => void;
  destroy: () => void;
}

export function createMessageChannel({
  targetWindow: originalTargetWindow = null,
  targetOrigin = window.location.origin,
  token,
}: {
  targetWindow?: Window | null;
  targetOrigin?: string;
  token: string;
}): IMessageChannel {
  let targetWindow: Window | null = originalTargetWindow;
  const listeners = new Map<string, MessageHandler>();
  const messageQueue: IMessage[] = [];

  function send<T = any>(type: string, payload?: T) {
    const message: IMessage<T> = { type, payload, token };
    console.log(`[postMessageSecure] Queuing or sending message`, message);

    if (targetWindow) {
      console.log(`[postMessageSecure] sending message`, message, targetWindow);
      targetWindow.postMessage(message, targetOrigin);
    } else {
      console.warn(
        `[postMessageSecure] targetWindow not set yet, message queued: ${type}`,
      );
      messageQueue.push(message);
    }
  }

  function flushQueue() {
    if (!targetWindow) return;
    console.log(
      `[postMessageSecure] Flushing ${messageQueue.length} queued messages`,
    );
    messageQueue.forEach((msg) => targetWindow!.postMessage(msg, targetOrigin));
    messageQueue.length = 0;
  }

  function handleMessage(event: MessageEvent) {
    if (event.origin !== targetOrigin) {
      console.warn(
        `[postMessageSecure] Ignored message from origin: ${event.origin}`,
      );
      return;
    }

    const data = event.data as IMessage;
    if (!data) {
      console.warn("[postMessageSecure] Received message with no data");
      return;
    }

    if (data.token !== token) {
      console.warn(
        "[postMessageSecure] Token mismatch, ignoring message:",
        data,
      );
      return;
    }

    const { type, payload } = data;
    console.log(
      `[postMessageSecure] Received message type="${type}" with payload:`,
      payload,
    );

    if (listeners.has(type)) {
      listeners.get(type)!(payload);
    } else {
      console.warn(`[postMessageSecure] No handler for message type="${type}"`);
    }
  }

  window.addEventListener("message", handleMessage);

  return {
    send,
    on: (type, callback) => {
      console.log(`[postMessageSecure] Registering handler for type="${type}"`);
      listeners.set(type, callback);
    },
    off: (type) => {
      console.log(`[postMessageSecure] Removing handler for type="${type}"`);
      listeners.delete(type);
    },
    setTargetWindow: (win: Window) => {
      console.log("[postMessageSecure] targetWindow set");
      targetWindow = win;
      flushQueue();
    },
    destroy: () => {
      console.log(
        "[postMessageSecure] Destroying channel and removing all handlers",
      );
      listeners.clear();
      window.removeEventListener("message", handleMessage);
    },
  };
}
