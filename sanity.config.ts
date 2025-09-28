import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";

export default defineConfig({
  name: "default",
  title: "Roki Foods CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "yourProjectId",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemaTypes },
});


