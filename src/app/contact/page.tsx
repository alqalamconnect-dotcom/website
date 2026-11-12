import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};
import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import EnquiryForm from "@/components/sections/EnquiryForm";

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Contact Us"
        description="Have a question, feedback or partnership idea? We would love to hear from you."
      />

      <Container className="py-12">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left: Form */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl font-bold text-ink-900">
              Send Us an Enquiry
            </h2>
            <p className="mt-2 text-sm text-ink-700">
              Fill in the form below and we will get back to you within 2–3
              working days. Fields marked with{" "}
              <span className="text-red-500">*</span> are required.
            </p>

            {/* Demo Notice */}
            <div className="mt-4 mb-6 rounded-lg border border-amber-200 bg-amber-50 p-3">
              <p className="text-xs text-amber-800">
                <strong>Prototype:</strong> This form simulates submission. In
                production, it will connect to a real backend and send email
                notifications.
              </p>
            </div>

            <EnquiryForm />
          </div>

          {/* Right: Contact Info */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-6">
              <h2 className="font-display text-2xl font-bold text-ink-900">
                Other Ways to Reach Us
              </h2>

              {/* Email */}
              <div className="flex gap-4 rounded-xl border border-ink-100 bg-white p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-ink-900">Email</h3>
                  <p className="mt-1 text-sm text-ink-700">
                    hello@alqalam.org
                  </p>
                  <p className="text-xs text-ink-700/60">
                    For general enquiries and partnerships
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex gap-4 rounded-xl border border-ink-100 bg-white p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-ink-900">WhatsApp</h3>
                  <p className="mt-1 text-sm text-ink-700">
                    +91 98765 43210
                  </p>
                  <p className="text-xs text-ink-700/60">
                    For quick questions and order enquiries
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 rounded-xl border border-ink-100 bg-white p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-500/10 text-accent-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-ink-900">Location</h3>
                  <p className="mt-1 text-sm text-ink-700">
                    Kerala, India
                  </p>
                  <p className="text-xs text-ink-700/60">
                    Exact address to be confirmed
                  </p>
                </div>
              </div>

              {/* Response Time */}
              <div className="flex gap-4 rounded-xl border border-ink-100 bg-white p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-ink-900">Response Time</h3>
                  <p className="mt-1 text-sm text-ink-700">
                    2–3 working days
                  </p>
                  <p className="text-xs text-ink-700/60">
                    We read every message personally
                  </p>
                </div>
              </div>

              {/* Privacy Note */}
              <div className="rounded-xl bg-ink-50 p-5">
                <h3 className="text-sm font-semibold text-ink-900">
                  Your Privacy Matters
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-700">
                  We collect only the information needed to respond to your
                  enquiry. Your data will not be sold, shared with third parties
                  or used for marketing without your explicit consent. We comply
                  with applicable data protection regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}