import type { QueryParams, ClientReturn } from "@sanity/client";
import { createSanityClient } from "./client";

export function configureSanity(config: {
  projectId: string;
  dataset: string;
  useCdn: boolean;
}) {
  const client = createSanityClient(config);

  return {
    client,
    sanityFetch<const G extends string>({
      query,
      params,
    }: {
      query: G;
      params?: QueryParams;
    }): Promise<ClientReturn<G, unknown>> {
      return client.fetch(query, params);
    },
  };
}
