"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const SERVICES = [
  { title: "Tax Preparation", desc: "PIT planning & filing" },
  { title: "Consultation", desc: "Expert tax advice" },
  { title: "Accounting & Bookkeeping", desc: "Reconciliations & reports" },
  { title: "Financial Compliance", desc: "NDPA & regulatory checks" },
  { title: "Incorporation", desc: "Start & register your business" },
  { title: "Payroll Services", desc: "PAYE automation" },
];

export default function ServicesMosaic({ img }: { img?: string }) {
  return (
    <section className="container py-12">
      <div className="grid gap-10 md:grid-cols-2 items-start">
        {/* Left mosaic */}
        <div>
          <div className="grid grid-cols-3 grid-rows-3 gap-4">
            <div className="col-span-1 row-span-3 rounded-2xl bg-[hsl(150_35%_18%)] p-8 text-primary-foreground flex items-center">
              <div>
                <h3 className="text-2xl font-bold">Our Services</h3>
                <p className="mt-3 text-sm text-primary-foreground/90">We provide full-stack tax and bookkeeping services to help businesses stay compliant and focused.</p>
              </div>
            </div>

            {SERVICES.map((s, i) => (
              <div key={s.title} className="col-span-1 row-span-1">
                <Card>
                  <div className="p-4">
                    <div className="font-semibold">{s.title}</div>
                    <div className="text-sm text-muted-foreground">{s.desc}</div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Right contact form */}
        <div>
          <div className="rounded-2xl overflow-hidden border mb-6">
            {img ? (
              // eslint-disable-next-line @next/next/no-img-element
              <Image src={img} alt="services" className="w-full object-cover" width={600} height={600} />
            ) : (
              <div className="h-56 bg-muted/20" />
            )}
          </div>

          <div className="rounded-2xl border p-8">
            <h3 className="text-2xl font-bold">Get in Touch</h3>
            <p className="mt-2 text-sm text-muted-foreground">Have questions or need a demo? Send us a message and we&rsquo;ll get back to you.</p>
            <form className="mt-6 grid gap-3" onSubmit={(e) => { e.preventDefault(); alert('Thanks — we will contact you shortly'); }}>
              <div className="grid gap-3 sm:grid-cols-2">
                <input name="first" placeholder="First name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground" />
                <input name="last" placeholder="Last name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <input name="email" type="email" placeholder="Email address" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground" />
                <input name="phone" placeholder="Phone number" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground" />
              </div>
              <textarea name="message" placeholder="Message" rows={4} className="w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground" />
              <div className="mt-2">
                <button className="inline-flex items-center rounded-md bg-[hsl(150_40%_22%)] px-4 py-2 text-white">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
