import { Block } from "payload";

export const Services: Block = {
  slug: "services",
  fields: [
    {
      name: "services",
      type: "relationship",
      relationTo: "services",
    },
  ],
};
