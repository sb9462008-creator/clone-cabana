const brands = [
  { name: "Dolby", logo: "https://ext.same-assets.com/3483074441/564403374.svg" },
  { name: "Logitech", logo: "https://ext.same-assets.com/3483074441/1991355256.svg" },
  { name: "Cisco", logo: "https://ext.same-assets.com/3483074441/3266531945.svg" },
  { name: "Sennheiser", logo: "https://ext.same-assets.com/3483074441/1564190403.svg" },
  { name: "Board", logo: "https://ext.same-assets.com/3483074441/3278086093.svg" },
  { name: "Readshirt", logo: "https://ext.same-assets.com/3483074441/1886126833.svg" },
];

export default function BrandLogos() {
  return (
    <section className="pt-0 pb-72 border-b border-white/5 px-6">
      <div className="max-w-[1000px] mx-auto">
        <p className="text-center text-[#cfd1d5] text-[11px] uppercase tracking-[0.2em] mb-6">
          Trusted by leading brands
        </p>

        <div
          className="relative overflow-hidden mx-auto"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%)",
          }}
        >
          <div className="flex animate-scroll items-center gap-8 md:gap-10">
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-8 w-auto object-contain filter invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
