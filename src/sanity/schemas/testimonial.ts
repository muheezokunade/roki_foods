import { defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    { name: "quote", type: "text" },
    { name: "author", type: "string" },
    { name: "role", type: "string" },
  ],
});





