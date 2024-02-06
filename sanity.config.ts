import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { loadEnvConfig } from "@next/env";
import { defineCliConfig } from "sanity/cli";

import { apiVersion, projectId, dataset } from "./sanity/env";
import home from "./sanity/lib/home";
import ui from "./sanity/lib/ui";
import contact from "./sanity/lib/contact";
import variant from "./sanity/lib/variant";
import gallery from "./sanity/lib/gallery";
import Form from "./sanity/lib/Form";


export default defineConfig({
  name: "default",
  title: "BetonVloeren",
  projectId,
  dataset,
  plugins: [deskTool()],
  schema: {
    types: [home,ui,contact,variant,gallery,Form],
  },
});
