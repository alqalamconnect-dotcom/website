import { Play } from "lucide-react";
import {
  Video,
  videoCategoryLabels,
  videoCategoryColors,
} from "@/types/media";

export default function VideoCard({ video }: { video: Video }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-ink-100 bg-white transition-shadow hover:shadow-md">
      {/* Thumbnail Placeholder */}
      <div
  className="relative flex h-44 items-center justify-center bg-ink-800"
  role="img"
  aria-label={`Thumbnail for ${video.title} — video coming soon`}
>
        <Play
          size={48}
          className="text-white/80 transition-transform group-hover:scale-110"
          aria-hidden="true"
        />
        <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-xs font-medium text-white">
          {video.duration}
        </span>
        {video.isDemo && (
          <span className="absolute left-2 top-2 rounded bg-amber-500 px-2 py-0.5 text-xs font-bold text-white">
            DEMO
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <span
          className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${videoCategoryColors[video.category]}`}
        >
          {videoCategoryLabels[video.category]}
        </span>
        <h3 className="mt-2 font-display text-base font-bold text-ink-900">
          {video.title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-ink-700 line-clamp-2">
          {video.description}
        </p>
        <p className="mt-2 text-xs text-ink-700/60">Ages {video.ageRange}</p>
      </div>
    </div>
  );
}