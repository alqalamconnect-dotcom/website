import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media",
};
import { videos } from "@/data/videos";
import { videoCategoryLabels, VideoCategory } from "@/types/media";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import VideoCard from "@/components/ui/VideoCard";

const featuredCategories: VideoCategory[] = [
  "science",
  "stories",
  "emotions",
  "art",
  "technology",
  "nature",
  "culture",
  "maths",
  "life-skills",
];

export default function MediaPage() {
  return (
    <main>
      <PageHeader
        title="Al-Qalam Media"
        description="Engaging, age-appropriate videos that encourage curiosity, creativity and learning. Designed with accessibility and inclusivity at the core."
      />
      <Container className="py-12">
        {/* Demo Notice */}
        <div className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm text-amber-800">
            <strong>Prototype notice:</strong> Video content is in development.
            Thumbnails and descriptions are placeholders. Real videos will be
            published after production, review and accessibility checks.
          </p>
        </div>

        {/* Accessibility Statement */}
        <div className="mb-10 rounded-xl bg-primary-50 p-6">
          <h2 className="font-display text-lg font-bold text-primary-600">
            Accessibility Commitment
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-700">
            All Al-Qalam videos will include captions, clear narration, simple
            language, visual explanations and predictable structure. Content will
            be available in English and Malayalam, with adjustable pacing where
            possible. We follow child online safety guidelines and respect
            children&apos;s privacy.
          </p>
        </div>

        {/* Videos by Category */}
        {featuredCategories.map((cat) => {
          const catVideos = videos.filter((v) => v.category === cat);
          if (catVideos.length === 0) return null;

          return (
            <section key={cat} className="mb-12">
              <h2 className="font-display text-2xl font-bold text-ink-900">
                {videoCategoryLabels[cat]}
              </h2>
              <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {catVideos.map((video) => (
                  <VideoCard key={video.slug} video={video} />
                ))}
              </div>
            </section>
          );
        })}

        {/* Future Formats */}
        <div className="mt-8 rounded-xl border border-dashed border-ink-200 p-8 text-center">
          <h3 className="font-display text-lg font-bold text-ink-900">
            More Formats Coming Soon
          </h3>
          <p className="mt-2 text-sm text-ink-700">
            Animated explainers, DIY tutorials, puppet shows, quizzes,
            interviews and mini-documentaries are all in development.
          </p>
        </div>
      </Container>
    </main>
  );
}