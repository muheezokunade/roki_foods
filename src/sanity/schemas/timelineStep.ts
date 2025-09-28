import { defineType } from "sanity";

export default defineType({
  name: "timelineStep",
  title: "Timeline Step",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "body", type: "text" },
    { name: "icon", type: "string" },
  ],
});





