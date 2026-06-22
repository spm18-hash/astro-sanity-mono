import { configureSanity } from "@repo/sanity";

export const { sanityFetch } = configureSanity({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
});
