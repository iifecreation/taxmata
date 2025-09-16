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

type IndividualPayload = {
  type: "individual";
  fullName: string;
  email: string;
  password: string;
  phone?: string;
  country?: string;
};

type BusinessPayload = {
  type: "business";
  businessName: string;
  contactName: string;
  email: string;
  password: string;
  ein?: string;
  website?: string;
};

type ConsultantPayload = {
  type: "consultant";
  firmName: string;
  email: string;
  password: string;
  licenseId?: string;
  yearsExperience?: number;
};

type RegulatorPayload = {
  type: "regulator";
  agencyName: string;
  officialName?: string;
  email: string;
  password: string;
  jurisdiction?: string;
  badgeId?: string;
};

export type AccountPayload =
  | IndividualPayload
  | BusinessPayload
  | ConsultantPayload
  | RegulatorPayload;


export type Field = {
  name: string;
  label: string;
  type: string;
  required?: boolean;
};