import { CollectionConfig } from "payload";

export const services: CollectionConfig = {
  slug: "services",
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "description",
      type: "textarea",
    },
  ],
};
