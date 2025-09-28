import { defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "slug", type: "slug", options: { source: "title" } },
    { name: "images", type: "array", of: [{ type: "image" }] },
    { name: "description", type: "text" },
    { name: "ingredients", type: "array", of: [{ type: "string" }] },
    { name: "size", type: "string" },
    { name: "price", type: "number" },
    { name: "badges", type: "array", of: [{ type: "string" }] },
    { name: "sustainabilityNotes", type: "text" },
    { name: "inventory", type: "number" },
  ],
});





