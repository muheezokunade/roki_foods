import { defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "slug", type: "slug", options: { source: "title" } },
    { name: "coverImage", type: "image" },
    { name: "excerpt", type: "text" },
    { name: "content", type: "array", of: [{ type: "block" }] },
    { name: "tags", type: "array", of: [{ type: "string" }] },
    { name: "author", type: "string" },
    { name: "publishDate", type: "datetime" },
  ],
});





