/**
 * Approved assessors (approved by Dyslexia in Defence).
 * To add an assessor, copy one object and fill in the fields you have.
 * Every field is optional; empty fields are hidden on the page.
 */
export interface Assessor {
  name?: string;
  organisation?: string;
  telephone?: string;
  email?: string;
  placeholder?: boolean;
}

export const assessors: Assessor[] = [
  {
    // PLACEHOLDER ENTRY: replace or remove once real assessors are added.
    name: "Example Assessor (placeholder)",
    organisation: "Example Assessment Ltd",
    telephone: "01234 567890",
    email: "assessor@example.com",
    placeholder: true,
  },
];
