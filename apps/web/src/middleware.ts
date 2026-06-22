import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  // Check if the page returned a 404 error status
  if (response.status === 404) {
    const url = new URL(context.request.url);

    // Rewrite to the route-specific 404 page based on path prefix
    console.log(url.pathname);
    if (url.pathname.startsWith("/posts")) {
      return context.rewrite("/posts/404");
    }
  }

  return response;
});
