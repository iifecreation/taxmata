"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";
import TopNav from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/home/Footer";

export default function Contact() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success("Message sent. We'll get back to you shortly.");
    (e.currentTarget as HTMLFormElement).reset();
  }
  return (
    <div className="min-h-screen">
      <TopNav />
      <section className="bg-[hsl(150_40%_22%)] text-white">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h1 className="text-4xl font-extrabold tracking-tight">Contact</h1>
          <p className="mt-3 max-w-2xl text-white/80">We&apos;d love to hear from you. Send us a message.</p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-12 space-y-10">
        <Card>
          <CardContent className="p-6">
            <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" name="name" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" required />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={6} required />
              </div>
              <div className="sm:col-span-2 flex justify-end">
                <Button type="submit">Send message</Button>
              </div>
            </form>
          </CardContent>
        </Card>
        <Separator />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { h: "Support", b: "support@taxmata.com" },
            { h: "Sales", b: "sales@taxmata.com" },
            { h: "Security", b: "security@taxmata.com" },
          ].map((c) => (
            <Card key={c.h}><CardContent className="p-6"><div className="font-semibold">{c.h}</div><div className="text-sm text-muted-foreground mt-1">{c.b}</div></CardContent></Card>
          ))}
        </div>
        <Separator />
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">FAQs</h2>
          <div className="grid gap-4">
            {[
              { q: "Where are you located?", a: "We are remote-first with hubs in Lagos." },
              { q: "What is your response time?", a: "Most messages are answered within 24 hours." },
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
