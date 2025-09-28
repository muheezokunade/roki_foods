import { defineType } from "sanity";

export default defineType({
  name: "recipe",
  title: "Recipe",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "slug", type: "slug", options: { source: "title" } },
    { name: "coverImage", type: "image" },
    { name: "excerpt", type: "text" },
    { name: "ingredients", type: "array", of: [{ type: "string" }] },
    { name: "steps", type: "array", of: [{ type: "text" }] },
    { name: "cookTime", type: "string" },
    { name: "serves", type: "number" },
    { name: "tags", type: "array", of: [{ type: "string" }] },
  ],
});





