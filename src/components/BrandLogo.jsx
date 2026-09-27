export default function BrandLogo() {
  return (
    <section class="py-12 border-y border-neutral-800 bg-black">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-center text-xs font-mono tracking-widest text-neutral-500 uppercase">
          POWERS THE WORLD'S BEST ENGINEERING TEAMS
        </p>

        <div class="mt-8 grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity">
          <img src="src/assets/logos/acme.svg" alt="Acme" class="h-6 invert" />
          <img
            src="src/assets/logos/linear.svg"
            alt="Linearify"
            class="h-6 invert"
          />
          <img
            src="src/assets/logos/pulse.svg"
            alt="PulseScale"
            class="h-6 invert"
          />
          <img
            src="src/assets/logos/novasphere.svg"
            alt="NovaSphere"
            class="h-6 invert"
          />
          <img
            src="src/assets/logos/cloudforge.svg"
            alt="CloudForge"
            class="h-6 invert"
          />
          <img
            src="src/assets/logos/devmatrix.svg"
            alt="DevMatrix"
            class="h-6 invert"
          />
        </div>
      </div>
    </section>
  );
}
