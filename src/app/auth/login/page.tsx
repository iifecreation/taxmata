"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import TopNav from "@/components/layout/TopNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await login(email, password);

    // Support ?redirect=/somewhere
    const dest = searchParams.get("redirect") ?? "/dashboard";
    router.push(dest);
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid min-h-[80vh] items-stretch gap-10 py-10 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <Card className="max-w-xl">
            <CardHeader>
              <CardTitle>Sign in</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4" onSubmit={onSubmit}>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <Link className="text-primary" href="/auth/forgot-password">
                    Forgot password?
                  </Link>
                  <Link className="text-primary" href="/auth">
                    Create account
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
