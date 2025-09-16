"use client";

import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  imageUrl?: string;
}

export default function Layout({ children, imageUrl = "/images/auth-banner.avif" }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col min-[900px]:flex-row max-[900px]:items-center m-0">
      {/* Left Section (Form) */}
      <div className="flex w-full flex-col justify-center px-4 sm:w-[450px] md:w-[50%] lg:px-24 py-5">
        {children}
      </div>

      {/* Right Section (Image) - Hidden on Mobile */}
      <div
        className="bg-muted hidden min-h-screen w-[60%] bg-cover bg-no-repeat min-[900px]:flex"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    </div>
  );
}
