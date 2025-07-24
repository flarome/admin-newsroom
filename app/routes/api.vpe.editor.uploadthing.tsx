import { createRouteHandler } from 'uploadthing/remix';
import { ourFileRouter } from '../VPE/packages/WYSIWYG/_plate/lib/uploadthing';


export const { action, loader } = createRouteHandler({
  router: ourFileRouter,
  // Apply an (optional) custom config:
  // config: { ... },
})