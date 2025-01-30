import { Rule } from 'sanity';

const customerSchema = {
  name: "customer",
  title: "Customer",
  type: "document",
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule: Rule) =>
        Rule.required().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
          name: "email",
          invert: false,
        }),
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "text",
    },
    {
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};

export default customerSchema; 
