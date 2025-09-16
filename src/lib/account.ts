export type AccountType = "individual" | "business" | "tax_consultant" | "regulator";

export const ACCOUNT_TYPE_LABELS: Record<AccountType, string> = {
  individual: "Individual",
  business: "Business",
  tax_consultant: "Tax Consultant",
  regulator: "Regulator",
};

export type SignupPayload =
  | {
      type: "individual";
      fullName: string;
      email: string;
      password: string;
      phone?: string;
      country?: string;
    }
  | {
      type: "business";
      businessName: string;
      contactName: string;
      email: string;
      password: string;
      ein?: string;
      website?: string;
    }
  | {
      type: "tax_consultant";
      firmName: string;
      email: string;
      password: string;
      licenseId?: string;
      yearsExperience?: number;
    }
  | {
      type: "regulator";
      agencyName: string;
      officialName?: string;
      email: string;
      password: string;
      jurisdiction?: string;
      badgeId?: string;
    };

const STORAGE_KEYS = {
  accountType: "taxmata:accountType",
  user: "taxmata:user",
} as const;

export function setAccountType(type: AccountType) {
  localStorage.setItem(STORAGE_KEYS.accountType, type);
}

export function getAccountType(): AccountType | null {
  const v = localStorage.getItem(STORAGE_KEYS.accountType);
  if (v === "individual" || v === "business" || v === "tax_consultant" || v === "regulator") return v as AccountType;
  return null;
}

export function saveUser(payload: SignupPayload) {
  localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(payload));
  setAccountType(payload.type);
}

export function getUser(): SignupPayload | null {
  const raw = localStorage.getItem(STORAGE_KEYS.user);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as SignupPayload;
  } catch (e) {
    console.error("Failed to parse user from storage", e);
    return null;
  }
}

export function clearSession() {
  localStorage.removeItem(STORAGE_KEYS.user);
  localStorage.removeItem(STORAGE_KEYS.accountType);
}
