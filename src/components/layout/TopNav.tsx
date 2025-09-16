"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function TopNav() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const LINKS = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-extrabold text-xl">
          <span className="inline-block h-7 w-7 rounded-md bg-[hsl(150_40%_22%)]" />
          <span>TaxMata</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {LINKS.map((l) => (
            <Link key={l.to} href={l.to} 
             className={`${
            pathname === l.to ? "text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
            >{l.label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* CTA always visible */}
          <Button asChild variant="secondary">
            <Link href="/contact">Get in touch</Link>
          </Button>

          {user ? (
            <>
              <div className="hidden items-center gap-2 md:flex">
                <span className="text-sm text-muted-foreground">{user.name}</span>
                <Button asChild variant="ghost"><Link href="/dashboard">Dashboard</Link></Button>
                <Button onClick={logout} variant="outline">Logout</Button>
              </div>
            </>
          ) : (
            <div className="hidden items-center gap-2 md:flex">
              <Button asChild variant="ghost"><Link href="/auth/login">Login</Link></Button>
              <Button asChild><Link href="/auth">Sign Up</Link></Button>
            </div>
          )}

          {/* Mobile menu */}
          <button onClick={() => setOpen((v) => !v)} className="ml-2 inline-flex items-center rounded-md bg-muted/10 p-2 md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-4">
            <div className="flex flex-col gap-3">
              {LINKS.map((l) => (
                <Link key={l.to} href={l.to} className="block text-sm text-muted-foreground hover:text-foreground" onClick={() => setOpen(false)}>{l.label}</Link>
              ))}
              <Link href="/contact" className="block text-sm font-semibold text-[hsl(150_40%_22%)]" onClick={() => setOpen(false)}>Get in touch</Link>
              {user ? (
                <>
                  <div className="pt-2 border-t" />
                  <div className="pt-2 text-sm text-muted-foreground">Signed in as {user.name}</div>
                  <Link href="/dashboard" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>Dashboard</Link>
                  <button onClick={() => { logout(); setOpen(false); }} className="text-sm text-muted-foreground text-left">Logout</button>
                </>
              ) : (
                <>
                  <div className="pt-2 border-t" />
                  <Link href="/auth/login" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>Login</Link>
                  <Link href="/auth" className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>Sign Up</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
