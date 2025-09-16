"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ACCOUNT_TYPE_LABELS, AccountType, saveUser } from "@/lib/account";
import Layout from "@/components/layout/auth/Layout";
import { AccountPayload, Field } from "@/types";

function isAccountType(v: string | undefined): v is AccountType {
  return (
    v === "individual" ||
    v === "business" ||
    v === "consultant" ||
    v === "regulator"
  );
}

export default function SignUpPage() {
  const router = useRouter();
  const params = useParams();
  const typeParam = params?.key as string | undefined;
  
  const [type, setType] = useState<AccountType | null>(null);

  useEffect(() => {
    if (isAccountType(typeParam)) {
      setType(typeParam);
    } else {
      router.replace("/auth");
    }
  }, [typeParam, router]);

  if (!type) return null;

  return (
    <Layout
      imageUrl="https://www.vmcdn.ca/f/files/coastreporter/images/stock-images/young-female-reading-her-bill-papers-and-using-calculator.jpg;w=1200;h=800;mode=crop"
    >
      <Card className="shadow-none border-none">
        <CardContent className="p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight">Sign up as {ACCOUNT_TYPE_LABELS[type]}</h1>
            <p className="mt-1 text-sm text-muted-foreground">Complete the form to create your account</p>
          </div>

          <DynamicSignupForm
            type={type}
            onSuccess={() => router.push("/dashboard")}
          />
          <div className="mt-4 text-xs text-muted-foreground">
            Not your account type?{" "}
            <Link href="/auth" className="text-primary hover:underline">
              Choose another
            </Link>
          </div>
        </CardContent>
      </Card>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/auth/login" className="text-primary hover:underline">
          Log in
        </Link>
      </p>
    </Layout>
  );
}

function DynamicSignupForm({
  type,
  onSuccess,
}: {
  type: AccountType;
  onSuccess: () => void;
}) {
  const [loading, setLoading] = useState(false);

  const fields: readonly Field[] = useMemo(() => {
    if (type === "individual") {
      return [
        { name: "fullName", label: "Full name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "password", label: "Password", type: "password", required: true },
        { name: "phone", label: "Phone (optional)", type: "tel" },
        { name: "country", label: "Country (optional)", type: "text" },
      ] as const;
    }
    if (type === "business") {
      return [
        { name: "businessName", label: "Business name", type: "text", required: true },
        { name: "contactName", label: "Contact name", type: "text", required: true },
        { name: "email", label: "Work email", type: "email", required: true },
        { name: "password", label: "Password", type: "password", required: true },
        { name: "ein", label: "EIN (optional)", type: "text" },
        { name: "website", label: "Website (optional)", type: "url" },
      ] as const;
    }
    if (type === "consultant") {
      return [
        { name: "firmName", label: "Firm name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "password", label: "Password", type: "password", required: true },
        { name: "licenseId", label: "License ID (optional)", type: "text" },
        { name: "yearsExperience", label: "Years of experience (optional)", type: "number" },
      ] as const;
    }
    return [
      { name: "agencyName", label: "Agency name", type: "text", required: true },
      { name: "officialName", label: "Official name (optional)", type: "text" },
      { name: "email", label: "Gov email", type: "email", required: true },
      { name: "password", label: "Password", type: "password", required: true },
      { name: "jurisdiction", label: "Jurisdiction (optional)", type: "text" },
      { name: "badgeId", label: "Badge/ID (optional)", type: "text" },
    ] as const;
  }, [type]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data: Record<string, string | File> = {};
    for (const [k, v] of form.entries()) data[k] = v;
    setLoading(true);
    setTimeout(() => {
      let payload: AccountPayload = { type, ...data } as AccountPayload;
      // Convert yearsExperience to number, only for consultant accounts
      if (payload.type === "consultant" && "yearsExperience" in payload) {
        payload = {
          ...payload,
          yearsExperience: Number(data.yearsExperience),
        };
      }
      saveUser(payload);
      setLoading(false);
      onSuccess();
    }, 600);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className="space-y-1.5">
            <Label htmlFor={f.name}>{f.label}</Label>
            <Input
              id={f.name}
              name={f.name}
              type={f.type}
              required={Boolean(f.required)}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-end">
        <Button type="submit" disabled={loading} className="w-full bg-[hsl(150_40%_22%)] hover:bg-[hsl(150_40%_22%)]/90 py-6">
          {loading
            ? "Creating..."
            : `Create ${ACCOUNT_TYPE_LABELS[type]} account`}
        </Button>
      </div>
    </form>
  );
}
