export default function Testimonial() {
  return (
    <section
      id="testimonials"
      className="py-24 border-b border-neutral-800 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left max-w-2xl space-y-2 mb-16">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            [ 04 ] CUSTOMERS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Loved by engineers. Trusted by founders.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            How leading technology organizations leverage NexusFlow every single
            day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-neutral-800 bg-[#0a0a0a] flex flex-col justify-between space-y-6">
            <p className="text-sm text-neutral-300 leading-relaxed">
              "NexusFlow transformed our sprint cycles. The automatic PR
              summaries and real-time canvas eliminated 40% of our daily sync
              overhead."
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-neutral-900">
              <img
                src="src/assets/images/avatar-1.svg"
                alt="Sarah Chen"
                className="w-8 h-8 rounded-full border border-neutral-800"
              />
              <div>
                <div className="text-xs font-semibold text-white">
                  Sarah Chen
                </div>
                <div className="text-[11px] font-mono text-neutral-500">
                  VP Eng @ CloudNova
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-neutral-800 bg-[#0a0a0a] flex flex-col justify-between space-y-6">
            <p className="text-sm text-neutral-300 leading-relaxed">
              "We migrated 60+ engineers from fragmented legacy tools to
              NexusFlow in one afternoon. The developer experience is
              world-className."
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-neutral-900">
              <img
                src="src/assets/images/avatar-2.svg"
                alt="Marcus Vance"
                className="w-8 h-8 rounded-full border border-neutral-800"
              />
              <div>
                <div className="text-xs font-semibold text-white">
                  Marcus Vance
                </div>
                <div className="text-[11px] font-mono text-neutral-500">
                  CTO @ HyperScale
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-neutral-800 bg-[#0a0a0a] flex flex-col justify-between space-y-6">
            <p className="text-sm text-neutral-300 leading-relaxed">
              "The edge preview pipelines and branch triggers feel magical.
              NexusFlow makes shipping software as fast as thinking about it."
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-neutral-900">
              <img
                src="src/assets/images/avatar-3.svg"
                alt="Elena Rostova"
                className="w-8 h-8 rounded-full border border-neutral-800"
              />
              <div>
                <div className="text-xs font-semibold text-white">
                  Elena Rostova
                </div>
                <div className="text-[11px] font-mono text-neutral-500">
                  Lead Architect @ Pulse
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
