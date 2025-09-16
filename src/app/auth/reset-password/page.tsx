"use client";

import Layout from "@/components/layout/auth/Layout";
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
      <Layout imageUrl="https://www.vmcdn.ca/f/files/coastreporter/images/stock-images/young-female-reading-her-bill-papers-and-using-calculator.jpg;w=1200;h=800;mode=crop">
        <Card className="max-full shadow-none border-none">
          <CardHeader>
            <CardTitle>Reset Password</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4" onSubmit={onSubmit}>
              <Input type="password" placeholder="New password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
              <Input type="password" placeholder="Confirm password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} required />
              <Button type="submit" className="w-full bg-[hsl(150_40%_22%)] hover:bg-[hsl(150_40%_22%)]/90 py-6">Update Password</Button>
            </form>
          </CardContent>
        </Card>
      </Layout>
    </div>
  );
}
