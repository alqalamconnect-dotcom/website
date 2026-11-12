import { lifecycleSteps } from "@/data/research";

export default function LifecycleTimeline() {
  return (
    <div className="relative">
      {/* Vertical Line (desktop only) */}
      <div className="absolute left-6 top-0 hidden h-full w-0.5 bg-primary-200 lg:left-1/2 lg:block" />

      <div className="space-y-8 lg:space-y-12">
        {lifecycleSteps.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={step.number} className="relative flex items-start gap-6 lg:gap-0">
              {/* Mobile: Number Circle */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-500 text-lg font-bold text-white lg:hidden">
                {step.number}
              </div>

              {/* Mobile: Content */}
              <div className="lg:hidden">
                <h3 className="font-display text-lg font-bold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-700">
                  {step.description}
                </p>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:grid lg:w-full lg:grid-cols-2 lg:gap-12">
                {/* Left Side */}
                <div
                  className={`${isEven ? "text-right" : "order-2 text-left"}`}
                >
                  <h3 className="font-display text-lg font-bold text-ink-900">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-700">
                    {step.description}
                  </p>
                </div>

                {/* Right Side (or Left for odd) */}
                <div
                  className={`relative ${isEven ? "order-2" : ""}`}
                >
                  {/* Number Circle on the center line */}
                  <div
                    className={`absolute top-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-lg font-bold text-white ${
                      isEven ? "-left-6" : "-right-6"
                    }`}
                  >
                    {step.number}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}