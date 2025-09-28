import { defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    { name: "title", type: "string", title: "Site Title" },
    { name: "description", type: "text", title: "Description" },
    {
      name: "social",
      type: "object",
      fields: [
        { name: "instagram", type: "url" },
        { name: "twitter", type: "url" },
      ],
    },
  ],
});





