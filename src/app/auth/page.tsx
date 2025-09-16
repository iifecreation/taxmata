"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import TopNav from "@/components/layout/TopNav";
import { Button } from "@/components/ui/button";

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

export default function AuthIndex() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const role = params.get("role") as typeof ROLES[number]["key"] | null;
    if (role) router.push(`/auth/signup/${role}`);
  }, [params, router]);

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <section className="container grid min-h-[80vh] items-stretch gap-10 py-10 md:grid-cols-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="relative hidden overflow-hidden rounded-3xl border md:block">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543932923-1cc9363a5798?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-transparent" />
        </div>
      </section>
    </div>
  );
}
