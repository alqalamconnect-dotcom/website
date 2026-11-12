import {
  FileText,
  Image,
  BookOpen,
  Users,
  Package,
  GraduationCap,
  Download,
} from "lucide-react";
import {
  Resource,
  resourceCategoryLabels,
  audienceLabels,
  ResourceCategory,
} from "@/types/resource";

const categoryIcons: Record<ResourceCategory, React.ReactNode> = {
  worksheets: <FileText size={20} />,
  "visual-supports": <Image size={20} />,
  "lesson-plans": <BookOpen size={20} />,
  "parent-guides": <Users size={20} />,
  "activity-packs": <Package size={20} />,
  "self-learning": <GraduationCap size={20} />,
};

const formatColors: Record<string, string> = {
  PDF: "bg-red-50 text-red-600",
  Printable: "bg-blue-50 text-blue-600",
  Interactive: "bg-purple-50 text-purple-600",
  Guide: "bg-green-50 text-green-600",
};

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <div className="flex flex-col rounded-xl border border-ink-100 bg-white p-5 transition-shadow hover:shadow-md">
      {/* Top Row */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
          {categoryIcons[resource.category]}
        </div>
        <div className="flex gap-1.5">
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${formatColors[resource.format]}`}
          >
            {resource.format}
          </span>
          {resource.isDemo && (
            <span className="rounded-full bg-ink-100 px-2 py-0.5 text-xs font-medium text-ink-700">
              DEMO
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="mt-3 font-display text-base font-bold text-ink-900">
        {resource.title}
      </h3>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-ink-700">
        {resource.description}
      </p>

      {/* Meta */}
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-700/70">
        <span>{resourceCategoryLabels[resource.category]}</span>
        <span>Ages {resource.ageRange}</span>
        <span>{audienceLabels[resource.audience]}</span>
        <span>{resource.fileSize}</span>
      </div>

      {/* Download Button */}
      <button
        disabled
        className="mt-4 inline-flex cursor-not-allowed items-center gap-2 rounded-lg bg-ink-50 px-4 py-2 text-sm font-medium text-ink-700"
      >
        <Download size={14} /> Download (Coming Soon)
      </button>
    </div>
  );
}