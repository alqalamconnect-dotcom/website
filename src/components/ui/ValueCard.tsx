interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="rounded-xl border border-ink-100 bg-white p-6 transition-shadow hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-500">
        {icon}
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-700">
        {description}
      </p>
    </div>
  );
}