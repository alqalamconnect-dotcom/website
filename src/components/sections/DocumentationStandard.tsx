import {
  FileCheck,
  Users,
  ShieldAlert,
  FlaskConical,
  Ruler,
  Accessibility,
  AlertTriangle,
  Factory,
  ClipboardCheck,
} from "lucide-react";

const docFields = [
  {
    icon: <FileCheck size={18} />,
    label: "Product name, version & problem addressed",
  },
  {
    icon: <Users size={18} />,
    label: "Intended users, use context & learning goals",
  },
  {
    icon: <FlaskConical size={18} />,
    label: "Evidence base & design rationale",
  },
  {
    icon: <Ruler size={18} />,
    label: "Materials, dimensions & manufacturing specs",
  },
  {
    icon: <Accessibility size={18} />,
    label: "Accessibility considerations",
  },
  {
    icon: <ShieldAlert size={18} />,
    label: "Safety assessment, warnings & age guidance",
  },
  {
    icon: <Users size={18} />,
    label: "Prototype & user-testing records",
  },
  {
    icon: <AlertTriangle size={18} />,
    label: "Limitations & unsupported claims",
  },
  {
    icon: <Factory size={18} />,
    label: "Production partner & quality-control checklist",
  },
  {
    icon: <ClipboardCheck size={18} />,
    label: "Pricing, stock & distribution details",
  },
];

export default function DocumentationStandard() {
  return (
    <div className="rounded-2xl border border-ink-100 bg-white p-6 sm:p-8">
      <h3 className="font-display text-xl font-bold text-ink-900">
        Product Documentation Standard
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-700">
        Every Al-Qalam product carries an internal record that documents its
        purpose, evidence, safety and limitations. This is not marketing copy —
        it is an accountability tool.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {docFields.map((field) => (
          <div
            key={field.label}
            className="flex items-start gap-3 rounded-lg bg-ink-50 p-3"
          >
            <span className="mt-0.5 shrink-0 text-primary-500">
              {field.icon}
            </span>
            <span className="text-sm text-ink-800">{field.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}