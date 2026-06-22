import { defineQuery } from "groq";

export const POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]
`);

export const POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  |
  order(publishedAt desc)
  {_id, title, slug, publishedAt}
`);
