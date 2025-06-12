import { createRouteHandler } from 'uploadthing/remix';


import { ourFileRouter } from '../VPE/src/lib/uploadthing.ts';


export const { action, loader } = createRouteHandler({
  router: ourFileRouter,
  // Apply an (optional) custom config:
  // config: { ... },
})