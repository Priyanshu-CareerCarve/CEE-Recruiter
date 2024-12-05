"use client";

import Link from "next/link";
import Image from "next/image";
import { Building2 } from "lucide-react";
// import { footerLinks } from "@/lib/constant";
import { useMediaQuery } from "@mui/material";

export function Footer() {
  const Mobile = useMediaQuery("(max-width: 768px)");
  return (
    <footer className="w-full border-t">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-8 py-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="/Career_Carve_Logo__1_-removebg-preview 2.png"
              width={Mobile ? 140 : 200}
              height={Mobile ? 60 : 100}
              alt="CareerCarve"
              className="object-contain"
            />
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © 2024 Parivartana Consulting Private Limited.
            <span className="block md:inline md:ml-1">
              All rights reserved.
            </span>
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-4 md:gap-8">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm hover:text-primary transition-colors underline underline-offset-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export const footerLinks = [
  {
    href: "/disclaimer",
    label: "Disclaimer"
  },
  {
    href: "/privacy-policy",
    label: "Privacy Policy"
  },
  {
    href: "/terms-of-use",
    label: "Terms of Use"
  }
] as const;