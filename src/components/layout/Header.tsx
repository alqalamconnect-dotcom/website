"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Resources", href: "/resources" },
  { label: "Media", href: "/media" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="font-display text-2xl font-bold text-primary-500"
          >
            Al-Qalam
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex lg:items-center lg:gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary-50 text-primary-600"
                      : "text-ink-700 hover:bg-ink-50 hover:text-ink-900"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-ink-700 hover:bg-ink-50 lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav
          className="border-t border-ink-100 bg-white lg:hidden"
          aria-label="Mobile navigation"
        >
          <Container>
            <div className="space-y-1 py-4">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-2 text-base font-medium transition-colors",
                      isActive
                        ? "bg-primary-50 text-primary-600"
                        : "text-ink-700 hover:bg-ink-50"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}