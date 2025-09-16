export type Role = "individual" | "business" | "consultant" | "regulator";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}

export interface SignUpPayload {
  role: Role;
  name: string;
  email: string;
  password: string;
  // Role-specific fields
  nin?: string;
  bvn?: string;
  phone?: string;
  cac?: string;
  tin?: string;
  contact?: string;
  practiceId?: string;
  associationNo?: string;
  govEmail?: string;
}
