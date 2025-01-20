import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "relatedProduct",
      title: "Select Product",
      type: "reference",
      to: [{ type: "product" }], // Reference to the Product schema
      validation: (Rule) =>
        Rule.required().error("Product selection is required"),
    }),
    defineField({
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: (doc) => doc.relatedProduct?._ref, // Product reference ID se slug generate karega
          slugify: (input) =>
            input
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^a-zA-Z0-9-]/g, "")
              .slice(0, 96),
        },
        validation: (Rule) => Rule.required().error("Slug is required"),
      }),
    defineField({
      name: "size",
      title: "Sizes",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "XL", value: "XL" },
          { title: "L", value: "L" },
          { title: "M", value: "M" },
          { title: "S", value: "S" },
          { title: "XS", value: "XS" },
        ],
        layout: "grid",
      },
      validation: (Rule) =>
        Rule.unique().min(1).error("At least one size must be selected"),
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Purple", value: "Purple" },
          { title: "Black", value: "Black" },
          { title: "Gold", value: "Gold" },
        ],
      },
      validation: (Rule) =>
        Rule.required().min(1).error("At least one color must be selected"),
    }),
  ],
});
