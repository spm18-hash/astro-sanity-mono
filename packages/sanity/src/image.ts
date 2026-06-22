import { createImageUrlBuilder, SanityImageSource } from "@sanity/image-url";
import { createSanityClient } from "./client";

export function createImageUrl(config: {
  projectId: string;
  dataset: string;
  useCdn: boolean;
}) {
  const client = createSanityClient(config);
  const builder = createImageUrlBuilder(client);

  return function urlFor(source: SanityImageSource) {
    return builder.image(source);
  };
}
