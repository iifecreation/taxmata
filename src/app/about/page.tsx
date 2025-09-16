import { Footer } from "@/components/layout/home/Footer";
import TopNav from "@/components/layout/TopNav";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <section className="bg-[hsl(150_40%_22%)] text-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight">About TaxMata</h1>
          <p className="mt-3 max-w-2xl text-white/80">
            TaxMata is a modern platform for Individuals, Businesses, Tax Consultants, and Regulators to collaborate on tax filing, compliance, and reporting.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-12 space-y-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { title: "Mission", body: "Simplify tax workflows and make compliance effortless through automation and clarity." },
            { title: "Vision", body: "A unified ecosystem where every account type works together securely with full transparency." },
            { title: "Values", body: "Security, trust, and a relentless focus on user experience across all roles." },
          ].map((i) => (
            <div key={i.title} className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.body}</p>
            </div>
          ))}
        </div>
        <Separator />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {["20k+ filings", "98% on-time", "8+ regions", "A+ security"].map((s) => (
            <Card key={s}><CardContent className="p-6 text-center font-semibold">{s}</CardContent></Card>
          ))}
        </div>
        <Separator />
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <p className="text-sm text-muted-foreground max-w-3xl">
            We started TaxMata after experiencing how fragmented and manual tax operations can be. Our team combined backgrounds in fintech, public sector, and design to build a platform that bridges all stakeholders while remaining intuitive.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card><CardContent className="p-6"><h3 className="font-semibold">Founding</h3><p className="mt-2 text-sm text-muted-foreground">Founded in 2024 with a remote-first team focused on global coverage.</p></CardContent></Card>
            <Card><CardContent className="p-6"><h3 className="font-semibold">Security-first</h3><p className="mt-2 text-sm text-muted-foreground">Encryption at rest and in transit, fine-grained access, and rigorous auditing.</p></CardContent></Card>
          </div>
        </div>
        <Separator />
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">FAQs</h2>
          <div className="grid gap-4">
            {[
              { q: "Who can use TaxMata?", a: "Individuals, Businesses, Tax Consultants, and Regulators in supported regions." },
              { q: "Do you support e-filing?", a: "Yes, in supported jurisdictions with auto-complete from your data." },
              { q: "Is my data safe?", a: "We follow industry best practices and regular security reviews." },
            ].map((f) => (
              <div key={f.q} className="rounded-lg border p-4"><div className="font-medium">{f.q}</div><div className="text-sm text-muted-foreground">{f.a}</div></div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
