"use client";

import { useState, useCallback } from "react";
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

  const toggleMenu = useCallback(
    (e: React.PointerEvent | React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setMobileOpen((prev) => !prev);
    },
    []
  );

  const closeMenu = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-ink-100 bg-white/95 backdrop-blur">
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

          {/* Mobile Menu Button */}
          <button
            type="button"
            onPointerUp={toggleMenu}
            className="inline-flex h-12 w-12 items-center justify-center rounded-md text-ink-700 active:bg-ink-100 lg:hidden"
            style={{
              touchAction: "manipulation",
              WebkitTapHighlightColor: "transparent",
            }}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Dropdown */}
      {mobileOpen && (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-ink-100 bg-white shadow-lg lg:hidden">
          <Container>
            <nav aria-label="Mobile navigation" className="py-3">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className={cn(
                        "rounded-md px-4 py-3 text-base font-medium transition-colors active:bg-ink-100",
                        isActive
                          ? "bg-primary-50 text-primary-600"
                          : "text-ink-700"
                      )}
                      style={{ touchAction: "manipulation" }}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}