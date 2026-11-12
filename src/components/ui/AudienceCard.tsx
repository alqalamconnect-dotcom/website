interface AudienceCardProps {
  number: string;
  title: string;
  description: string;
}

export default function AudienceCard({
  number,
  title,
  description,
}: AudienceCardProps) {
  return (
    <div className="flex gap-4 rounded-lg border border-ink-100 bg-white p-5">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-white">
        {number}
      </span>
      <div>
        <h3 className="font-semibold text-ink-900">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-700">
          {description}
        </p>
      </div>
    </div>
  );
}