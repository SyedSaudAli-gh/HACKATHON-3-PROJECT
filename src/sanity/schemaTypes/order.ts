import { Rule } from "sanity";

const orderSchema = {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "customer",
      title: "Customer",
      type: "reference",
      to: [{ type: "customer" }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          name: "orderItem",
          title: "Order Item",
          fields: [
            {
              name: "product",
              title: "Product",
              type: "reference",
              to: [{ type: "product" }],
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: "quantity",
              title: "Quantity",
              type: "number",
              validation: (Rule: Rule) => Rule.required().min(1),
            },
            {
              name: "price",
              title: "Price",
              type: "number",
              validation: (Rule: Rule) => Rule.required().min(0),
            },
          ],
          preview: {
            select: {
              productName: "product.name", // Fetch the product name
              quantity: "quantity",
              price: "price",
            },
            prepare({ productName, quantity, price }: { productName: string | undefined, quantity: number, price: number }) {
              return {
                title: productName || "No Product", // Display the product name
                subtitle: `Quantity: ${quantity} | Price: $${price}`,
              };
            },
          },
        },
      ],
      validation: (Rule: Rule) => Rule.required().min(1),
    },
    {
      name: "order_date",
      title: "Order Date",
      type: "datetime",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "total_amount",
      title: "Total Amount",
      type: "number",
      validation: (Rule: Rule) => Rule.required().min(0),
    },
  ],
};

export default orderSchema;
