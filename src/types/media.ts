export interface Video {
  slug: string;
  title: string;
  category: VideoCategory;
  duration: string;
  ageRange: string;
  description: string;
  isDemo: boolean;
}

export type VideoCategory =
  | "science"
  | "maths"
  | "stories"
  | "art"
  | "technology"
  | "emotions"
  | "life-skills"
  | "nature"
  | "culture";

export const videoCategoryLabels: Record<VideoCategory, string> = {
  science: "Science & Discovery",
  maths: "Maths & Logical Thinking",
  stories: "Stories & Imagination",
  art: "Art & Creativity",
  technology: "Technology & Innovation",
  emotions: "Emotional & Social Development",
  "life-skills": "Everyday Life Skills",
  nature: "Nature & Environment",
  culture: "Culture & Heritage",
};

export const videoCategoryColors: Record<VideoCategory, string> = {
  science: "bg-blue-100 text-blue-700",
  maths: "bg-purple-100 text-purple-700",
  stories: "bg-pink-100 text-pink-700",
  art: "bg-rose-100 text-rose-700",
  technology: "bg-cyan-100 text-cyan-700",
  emotions: "bg-amber-100 text-amber-700",
  "life-skills": "bg-green-100 text-green-700",
  nature: "bg-emerald-100 text-emerald-700",
  culture: "bg-orange-100 text-orange-700",
};