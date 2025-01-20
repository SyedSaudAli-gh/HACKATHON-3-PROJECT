export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-20";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const token = assertValue(
  process.env.NEXT_PUBLIC_SANITY_TOKEN ||
    "skaQjWPqyOHOD3vKoni560IuCXbzjYlsT5E3ycEFD13UQm12AmYTiZoIy29EnumzqLK2WLX1gIpZXQo8bdjM4qn8IxJIDEaxnusexKkHoCfkMwQvJAhFu45MDwAWAzjzhDDJ8sgzX1vjMiOlB90q31GJuZ7tiBt9JeFAcd182S7vCEUbfIQW",
  "Missing environment variable: NEXT_PUBLIC_SANITY_TOKEN"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
