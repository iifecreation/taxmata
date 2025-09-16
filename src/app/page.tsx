import TopNav from "@/components/layout/TopNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ServicesMosaic from "@/components/sections/ServicesMosaic";
import Link from "next/link";
import { Hero } from "@/components/layout/home/Hero";
import { Services } from "@/components/layout/home/Services";
import { About } from "@/components/layout/home/About";
import { Testimonials } from "@/components/layout/home/Testimonials";
import { Pricing } from "@/components/layout/home/Pricing";
import { Blog } from "@/components/layout/home/Blog";
import { CTA } from "@/components/layout/home/CTA";
import { Footer } from "@/components/layout/home/Footer";

const HERO_IMG = "https://cdn.builder.io/api/v1/image/assets%2F6cfe657b78d6432ab4617fc35d7cf0c0%2Fd2b8a872e3814715bbc6f87742bb8776?format=webp&width=1600";
const SERVICES_IMG = "https://cdn.builder.io/api/v1/image/assets%2F6cfe657b78d6432ab4617fc35d7cf0c0%2Fdaa9d7b5f5b644db91a00ea1a684b4b6?format=webp&width=1200";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[hsl(150_35%_95%)] text-foreground w-full">
      <TopNav />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Pricing />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
