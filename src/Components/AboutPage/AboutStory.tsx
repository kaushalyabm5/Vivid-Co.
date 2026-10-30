export default function AboutStory() {
  return (
    <section className="w-full bg-[white] text-stone-900 pt-22 pb-10">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 space-y-16">
        
        {/* Header with Est. Year */}
        <div className="space-y-4 text-center sm:text-left">
          <div className="inline-block bg-stone-900 text-white text-[9px] sm:text-[10px] uppercase tracking-[0.3em] px-3.5 py-1 font-light">
            Est. 2022 • The Genesis
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-tight text-stone-900 leading-[1.15]">
            Rooted in Precision. Driven by Solitude.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center text-stone-600 font-light text-xs sm:text-sm leading-relaxed">
          <div className="space-y-6">
            <p>
              Vivid.Co was established in 2022 with a singular, uncompromising vision: to dismantle the chaotic, impersonal assembly-line nature of modern grooming and replace it with an environment of absolute personal sanctuaries.
            </p>
            <p>
              Since our inception, we have treated hair architecture and dermal care not merely as routine services, but as refined disciplines blending European technical rigor with organic, botanical wellness.
            </p>
          </div>

          <div className="space-y-6 border-l border-stone-300 pl-6 sm:pl-8">
            <p>
              From our humble beginnings to becoming a benchmark for modern grooming and individual care, our sanctuary stands as a testament to that vision—providing an undisturbed space for personal transformation.
            </p>
            <p className="text-stone-900 font-medium tracking-wide uppercase text-[10px] sm:text-xs">
              — The Founders & Creative Direction
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}