"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { EnquiryType, enquiryTypeLabels } from "@/types/enquiry";
import { cn } from "@/lib/utils";

const enquiryTypes: EnquiryType[] = [
  "general",
  "parent",
  "teacher",
  "institution",
  "researcher",
  "partner",
  "feedback",
];

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    enquiryType: "general" as EnquiryType,
    name: "",
    email: "",
    phone: "",
    organisation: "",
    message: "",
    consent: false,
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      alert("Please agree to the privacy notice before submitting.");
      return;
    }

    setStatus("submitting");

    // Simulate form submission (replace with real API call later)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // For the prototype, we just show success
    setStatus("success");

    console.log("Enquiry submitted:", formData);
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle size={48} className="mx-auto text-green-600" />
        <h3 className="mt-4 font-display text-2xl font-bold text-green-800">
          Thank You!
        </h3>
        <p className="mt-2 text-green-700">
          Your enquiry has been received. We will respond within 2–3 working
          days.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setFormData({
              enquiryType: "general",
              name: "",
              email: "",
              phone: "",
              organisation: "",
              message: "",
              consent: false,
            });
          }}
          className="mt-6 rounded-lg bg-green-600 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-700"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Enquiry Type */}
      <div>
        <label
          htmlFor="enquiryType"
          className="block text-sm font-semibold text-ink-900"
        >
          I am a... <span className="text-red-500">*</span>
        </label>
        <select
          id="enquiryType"
          name="enquiryType"
          value={formData.enquiryType}
          onChange={handleChange}
          required
          className="mt-1 w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
        >
          {enquiryTypes.map((type) => (
            <option key={type} value={type}>
              {enquiryTypeLabels[type]}
            </option>
          ))}
        </select>
      </div>

      {/* Name & Email Row */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-ink-900"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className="mt-1 w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-700/40 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-ink-900"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="mt-1 w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-700/40 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          />
        </div>
      </div>

      {/* Phone & Organisation Row */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-ink-900"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="mt-1 w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-700/40 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          />
        </div>
        <div>
          <label
            htmlFor="organisation"
            className="block text-sm font-semibold text-ink-900"
          >
            Organisation / School
          </label>
          <input
            type="text"
            id="organisation"
            name="organisation"
            value={formData.organisation}
            onChange={handleChange}
            placeholder="If applicable"
            className="mt-1 w-full rounded-lg border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-700/40 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-ink-900"
        >
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us how we can help, what you're interested in, or share your feedback..."
          className="mt-1 w-full resize-y rounded-lg border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-700/40 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
        />
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1 h-4 w-4 shrink-0 rounded border-ink-300 text-primary-500 focus:ring-primary-500"
        />
        <label htmlFor="consent" className="text-sm leading-relaxed text-ink-700">
          I agree to Al-Qalam collecting and storing my information to respond
          to this enquiry. I understand my data will not be shared with third
          parties without my consent.{" "}
          <span className="text-red-500">*</span>
        </label>
      </div>

      {/* Error State */}
      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle size={16} />
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-colors sm:w-auto",
          status === "submitting"
            ? "cursor-not-allowed bg-primary-300"
            : "bg-primary-500 hover:bg-primary-600"
        )}
      >
        {status === "submitting" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Enquiry
          </>
        )}
      </button>
    </form>
  );
}