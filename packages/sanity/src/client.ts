import { createClient } from "@sanity/client";

export function createSanityClient(config: {
  projectId: string;
  dataset: string;
  useCdn: boolean;
}) {
  return createClient({
    projectId: config.projectId,
    dataset: config.dataset,
    apiVersion: "2026-01-01",
    useCdn: config.useCdn,
  });
}
