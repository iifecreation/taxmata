"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import TopNav from "@/components/layout/TopNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import Layout from "./Layout";

export default function LoginLayout() {
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
    <div className="min-h-screen bg-background w-full">
      <TopNav />

      <Layout imageUrl="https://www.vmcdn.ca/f/files/coastreporter/images/stock-images/young-female-reading-her-bill-papers-and-using-calculator.jpg;w=1200;h=800;mode=crop">
        <Card className="max-full shadow-none border-none">
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
              <Button type="submit" className="w-full bg-[hsl(150_40%_22%)] hover:bg-[hsl(150_40%_22%)]/90 py-6">
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
      </Layout>
    </div>
  );
}
