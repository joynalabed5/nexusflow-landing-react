export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 border-b border-neutral-800 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            [ 05 ] PRICING
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Predictable pricing. No hidden fees.
          </h2>
          <p className="text-sm text-neutral-400">
            Start for free on Hobby, or scale to Pro as your engineering squad
            grows.
          </p>

          <div className="pt-4 flex items-center justify-center gap-3 font-mono text-xs">
            <span id="monthly-label" className="text-white">
              Monthly
            </span>
            <button
              id="billing-toggle"
              type="button"
              role="switch"
              aria-checked="false"
              className="relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer rounded-full border border-neutral-700 bg-neutral-900 transition-colors focus:outline-none"
            >
              <span
                id="toggle-indicator"
                className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow transition translate-x-0.5 mt-0.5"
              ></span>
            </button>
            <span
              id="annual-label"
              className="text-neutral-500 flex items-center gap-1"
            >
              Annual
              <span className="px-1.5 py-0.5 text-[10px] text-emerald-400 bg-emerald-950 border border-emerald-800 rounded">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div className="p-8 rounded-xl border border-neutral-800 bg-[#0a0a0a] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-white">Hobby</h3>
                <p className="text-xs text-neutral-400">
                  For individual builders and personal projects
                </p>
              </div>

              <div className="flex items-baseline gap-1 font-mono">
                <span
                  className="text-4xl font-bold text-white pricing-value"
                  data-monthly="$0"
                  data-annual="$0"
                >
                  $0
                </span>
                <span className="text-xs text-neutral-500">/ month</span>
              </div>

              <div className="pt-4 border-t border-neutral-900 space-y-2.5 text-xs text-neutral-300 font-mono">
                <div className="flex items-center gap-2">
                  <img
                    src="src/assets/icons/check.svg"
                    alt=""
                    className="w-3.5 h-3.5 invert"
                  />
                  <span>Up to 3 Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="src/assets/icons/check.svg"
                    alt=""
                    className="w-3.5 h-3.5 invert"
                  />
                  <span>Unlimited Kanban Boards</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="src/assets/icons/check.svg"
                    alt=""
                    className="w-3.5 h-3.5 invert"
                  />
                  <span>Standard GitHub Sync</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="src/assets/icons/check.svg"
                    alt=""
                    className="w-3.5 h-3.5 invert"
                  />
                  <span>Community Support</span>
                </div>
              </div>
            </div>

            <a
              href="#deploy"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-mono font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 hover:text-white border border-neutral-800 rounded-lg transition-colors"
            >
              <span>Start Free</span>
              <img
                src="src/assets/icons/arrow-right.svg"
                alt=""
                className="w-3.5 h-3.5 invert opacity-70"
              />
            </a>
          </div>

          <div className="p-8 rounded-xl border-2 border-white bg-[#0a0a0a] flex flex-col justify-between space-y-6 relative shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white">Pro</h3>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold text-black bg-white rounded">
                  POPULAR
                </span>
              </div>
              <p className="text-xs text-neutral-400">
                For fast-moving engineering teams and scaleups
              </p>

              <div className="flex items-baseline gap-1 font-mono">
                <span
                  className="text-4xl font-bold text-white pricing-value"
                  data-monthly="$20"
                  data-annual="$16"
                >
                  $20
                </span>
                <span className="text-xs text-neutral-500">/ user / month</span>
              </div>

              <div className="pt-4 border-t border-neutral-800 space-y-2.5 text-xs text-neutral-200 font-mono">
                <div className="flex items-center gap-2">
                  <img
                    src="src/assets/icons/check.svg"
                    alt=""
                    className="w-3.5 h-3.5 invert"
                  />
                  <span>Unlimited Projects & Sprints</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="src/assets/icons/check.svg"
                    alt=""
                    className="w-3.5 h-3.5 invert"
                  />
                  <span>10,000 AI Agent Executions / mo</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="src/assets/icons/check.svg"
                    alt=""
                    className="w-3.5 h-3.5 invert"
                  />
                  <span>Predictive Sprint Analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="src/assets/icons/check.svg"
                    alt=""
                    className="w-3.5 h-3.5 invert"
                  />
                  <span>Full Ecosystem Integrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="src/assets/icons/check.svg"
                    alt=""
                    className="w-3.5 h-3.5 invert"
                  />
                  <span>Priority 24/7 SLA Support</span>
                </div>
              </div>
            </div>

            <a
              href="#deploy"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-mono font-medium text-black bg-white hover:bg-neutral-200 rounded-lg transition-colors"
            >
              <span>Upgrade to Pro</span>
              <img
                src="src/assets/icons/arrow-right.svg"
                alt=""
                className="w-3.5 h-3.5 invert"
              />
            </a>
          </div>

          <div className="p-8 rounded-xl border border-neutral-800 bg-[#0a0a0a] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-white">Enterprise</h3>
                <p className="text-xs text-neutral-400">
                  For mission-critical compliance & security
                </p>
              </div>

              <div className="flex items-baseline gap-1 font-mono">
                <span
                  className="text-4xl font-bold text-white pricing-value"
                  data-monthly="Custom"
                  data-annual="Custom"
                >
                  Custom
                </span>
              </div>

              <div className="pt-4 border-t border-neutral-900 space-y-2.5 text-xs text-neutral-300 font-mono">
                <div className="flex items-center gap-2">
                  <img
                    src="src/assets/icons/check.svg"
                    alt=""
                    className="w-3.5 h-3.5 invert"
                  />
                  <span>Dedicated SAML SSO & SCIM</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="src/assets/icons/check.svg"
                    alt=""
                    className="w-3.5 h-3.5 invert"
                  />
                  <span>Custom Data Residency</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="src/assets/icons/check.svg"
                    alt=""
                    className="w-3.5 h-3.5 invert"
                  />
                  <span>99.99% Uptime Guarantee SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="src/assets/icons/check.svg"
                    alt=""
                    className="w-3.5 h-3.5 invert"
                  />
                  <span>Dedicated Technical Architect</span>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-mono font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 hover:text-white border border-neutral-800 rounded-lg transition-colors"
            >
              <span>Contact Sales</span>
              <img
                src="src/assets/icons/arrow-right.svg"
                alt=""
                className="w-3.5 h-3.5 invert opacity-70"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
