import { defineType } from "sanity";

export default defineType({
  name: "impactStat",
  title: "Impact Stat",
  type: "document",
  fields: [
    { name: "label", type: "string" },
    { name: "value", type: "string" },
    { name: "suffix", type: "string" },
  ],
});





