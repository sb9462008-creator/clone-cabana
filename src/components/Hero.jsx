export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center pt-[140px] pb-[60px] overflow-hidden">
      <div className="absolute inset-0 hero-gradient pointer-events-none" />
      <div className="relative z-10 text-center px-6 max-w-[900px] mx-auto">
        <h1 className="text-[44px] md:text-[90px] font-semibold text-white leading-[1] tracking-[-0.018em] mb-6">
          Design <em className="text-[#a78bfa] italic font-semibold">faster</em>
          <br />
          Launch <em className="text-[#a78bfa] italic font-semibold">sooner</em>
        </h1>

        <p className="text-[18px] text-[#b9bbc1] leading-[1.7] mb-8 max-w-[640px] mx-auto">
          Ship pixel-perfect designs without starting from scratch 🚀
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.youtube.com/watch?v=xRbrn4Y6NHw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4.5 rounded-full text-[12px] font-semibold transition-colors shadow-[inset_1px_1px_7px_rgba(255,255,255,0.12),inset_-2px_-2px_13px_rgba(0,0,0,0.34)]"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Watch Figma Trailer
          </a>
          <a
            href="https://www.youtube.com/watch?v=8ISTVQhlcag"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4.5 rounded-full text-[12px] font-semibold transition-colors shadow-[inset_1px_1px_7px_rgba(255,255,255,0.12),inset_-2px_-2px_13px_rgba(0,0,0,0.34)]"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 3L19 12L5 21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Watch Framer Trailer
          </a>
        </div>
      </div>
    </section>
  );
}
