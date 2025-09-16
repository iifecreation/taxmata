"use client";

import TopNav from "@/components/layout/TopNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { Role, SignUpPayload } from "@/types";
import { FormEvent, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

const roleFields: Record<
  Role,
  { key: keyof SignUpPayload; label: string; type?: string }[]
> = {
  individual: [
    { key: "nin", label: "NIN" },
    { key: "bvn", label: "BVN" },
    { key: "phone", label: "Phone", type: "tel" },
  ],
  business: [
    { key: "cac", label: "CAC Registration No." },
    { key: "tin", label: "TIN" },
    { key: "contact", label: "Contact" },
  ],
  consultant: [
    { key: "practiceId", label: "Practice ID" },
    { key: "associationNo", label: "Association Membership No." },
  ],
  regulator: [
    { key: "govEmail", label: "Government Email", type: "email" },
  ],
};

export default function SignUp() {
  const params = useParams();
  const router = useRouter();
  const { signup } = useAuth();

  const role = (params?.role as Role) ?? "individual";

  const [form, setForm] = useState<SignUpPayload>({
    role,
    name: "",
    email: "",
    password: "",
  });

  const fields = roleFields[role];

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await signup({ ...form, role });
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <section className="container grid min-h-[80vh] items-stretch gap-10 py-10 md:grid-cols-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center">
          <Card className="max-w-xl">
            <CardHeader>
              <CardTitle>
                Join as {role.charAt(0).toUpperCase() + role.slice(1)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4" onSubmit={onSubmit}>
                <Input
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  required
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  required
                />
                {fields.map((f) => (
                  <Input
                    key={String(f.key)}
                    type={f.type ?? "text"}
                    placeholder={f.label}
                    value={form[f.key] as string ?? ""}
                    onChange={(e) =>
                      setForm({ ...form, [f.key]: e.target.value } as SignUpPayload)
                    }
                    required
                  />
                ))}
                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-600/70 py-6">
                  Create Account
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link className="text-primary" href="/auth/login">
                    Login
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="relative hidden overflow-hidden rounded-3xl border md:block">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543932923-1cc9363a5798?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-transparent" />
        </div>
      </section>
    </div>
  );
}
