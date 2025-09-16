"use client";

import TopNav from "@/components/layout/TopNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }
    alert("Password updated");
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <section className="container grid min-h-[80vh] items-stretch gap-10 py-10 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <Card className="max-w-xl">
            <CardHeader>
              <CardTitle>Reset Password</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4" onSubmit={onSubmit}>
                <Input type="password" placeholder="New password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                <Input type="password" placeholder="Confirm password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} required />
                <Button type="submit" className="w-full">Update Password</Button>
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
