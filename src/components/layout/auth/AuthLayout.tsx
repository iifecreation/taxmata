"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import TopNav from "@/components/layout/TopNav";
import { Button } from "@/components/ui/button";
import Layout from "./Layout";

const ROLES = [
  {
    key: "individual",
    title: "Individual",
    desc: "File PIT, get TCC, NDPA checks and pay online.",
  },
  {
    key: "business",
    title: "Business",
    desc: "Automate PAYE, VAT, WHT, NDPA and state filings.",
  },
  {
    key: "consultant",
    title: "Tax Consultant",
    desc: "Manage multiple clients from one dashboard.",
  },
  {
    key: "regulator",
    title: "Regulator",
    desc: "Monitor sector and state-wide compliance.",
  },
] as const;

export default function AuthLayout() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const role = params.get("role") as typeof ROLES[number]["key"] | null;
    if (role) router.push(`/auth/signup/${role}`);
  }, [params, router]);

  return (
    <div className="min-h-screen bg-background">
        <TopNav />
        <Layout imageUrl="https://www.vmcdn.ca/f/files/coastreporter/images/stock-images/young-female-reading-her-bill-papers-and-using-calculator.jpg;w=1200;h=800;mode=crop">
        <div className="flex flex-col justify-center">
          <h2 className="mb-2 text-3xl font-extrabold">Sign up Options</h2>
          <p className="mb-6 text-muted-foreground">
            Choose an account type to continue.
          </p>
          <div className="grid gap-3">
            {ROLES.map((r) => (
              <button
                key={r.key}
                onClick={() => router.push(`/auth/signup/${r.key}`)}
                className="flex flex-col items-start rounded-xl border p-4 text-left transition hover:border-primary focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <div className="mb-1 inline-flex items-center gap-2 rounded-md bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                  {r.title}
                </div>
                <div className="text-sm text-muted-foreground">{r.desc}</div>
              </button>
            ))}
            <div className="pt-2">
              <Button variant="ghost" onClick={() => router.push("/auth/login")}>
                Already have an account? Login
              </Button>
            </div>
          </div>
        </div>
        </Layout>
    </div>
  );
}
