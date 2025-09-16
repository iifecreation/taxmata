"use client";

import { Footer } from "@/components/layout/home/Footer";
import TopNav from "@/components/layout/TopNav";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Services() {
  const services = [
    { t: "Individual Filing", d: "Guided returns, refund tracking, and withholding optimization." },
    { t: "Business Suite", d: "Payroll taxes, VAT, invoicing, and compliance dashboards." },
    { t: "Consultant Workspace", d: "Client intake, document vaults, SLAs, and bulk filings." },
    { t: "Regulator Tools", d: "Policy publishing, audit queues, and compliance analytics." },
  ];
  return (
    <div className="min-h-screen">
      <TopNav />
      <section className="bg-[hsl(150_40%_22%)] text-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight">Services</h1>
          <p className="mt-3 max-w-2xl text-white/80">Purpose-built capabilities for each account type.</p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-12 space-y-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Card key={s.t}>
              <CardContent className="p-6">
                <div className="text-base font-semibold">{s.t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.d}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Separator />
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">How it works</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { t: "Connect", d: "Link payroll, banking, or existing systems for accurate prefill." },
              { t: "Automate", d: "We compute obligations and propose filings with guardrails." },
              { t: "File", d: "Submit electronically, track status, and maintain an audit trail." },
            ].map((s) => (
              <Card key={s.t}><CardContent className="p-6"><div className="font-semibold">{s.t}</div><div className="text-sm text-muted-foreground mt-2">{s.d}</div></CardContent></Card>
            ))}
          </div>
        </div>
        <Separator />
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Add-ons</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {["Document OCR", "Smart Receipts", "Advisory Hours"].map((a) => (
              <Card key={a}><CardContent className="p-6 text-center font-semibold">{a}</CardContent></Card>
            ))}
          </div>
        </div>
        <Separator />
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">FAQs</h2>
          <div className="grid gap-4">
            {[
              { q: "Do you support multiple countries?", a: "We support several regions and are expanding continuously." },
              { q: "Can I migrate from another tool?", a: "Yes, import your data via CSV or secure integrations." },
            ].map((f) => (
              <div key={f.q} className="rounded-lg border p-4"><div className="font-medium">{f.q}</div><div className="text-sm text-muted-foreground">{f.a}</div></div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
