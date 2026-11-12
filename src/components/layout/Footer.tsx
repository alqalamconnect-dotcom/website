import Link from "next/link";
import Container from "@/components/ui/Container";

const exploreLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Research", href: "/research" },
];

const resourceLinks = [
  { label: "Learning Resources", href: "/resources" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50">
      <Container className="py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="font-display text-2xl font-bold text-primary-500"
            >
              Al-Qalam
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              Writing Lives, Shaping Humanity.
            </p>
            <p className="mt-1 text-xs font-medium tracking-wide text-accent-500">
              Research. Create. Empower. Transform.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-900">
              Explore
            </h3>
            <ul className="mt-3 space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-700 transition-colors hover:text-primary-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-900">
              Resources
            </h3>
            <ul className="mt-3 space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-700 transition-colors hover:text-primary-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-900">
              Get in Touch
            </h3>
            <p className="mt-3 text-sm text-ink-700">
              Have a question or want to partner with us?
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-block text-sm font-medium text-primary-500 transition-colors hover:text-primary-600"
            >
              Contact Us →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-ink-200 pt-6 text-center">
          <p className="text-xs text-ink-700/60">
            © 2025 Al-Qalam. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-ink-700/40">
            Prototype — content is for demonstration purposes only.
          </p>
        </div>
      </Container>
    </footer>
  );
}