export default function FramerSection() {
  return (
    <section id="framer-preview" className="pt-[80px] pb-0 px-5">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-[36px] md:text-[64px] font-semibold text-white text-center tracking-[-0.018em] leading-[1.1] mb-4">
          Building in Framer? We're there too.
        </h2>
        <p className="text-[#80858f] text-center text-[16px] md:text-[18px] leading-[1.7] max-w-[820px] mx-auto mb-10 md:mb-12">
          Build and launch your brand using our Design System & UI Kit for{" "}
          <a
            href="https://www.framer.com?via=chris24"
            className="text-[#a78bfa] hover:underline"
          >
            Framer
          </a>
          , the most powerful tool for creating jaw-dropping websites (including this one 😉)
        </p>

        <div className="relative overflow-hidden max-w-[800px] mx-auto rounded-xl border border-white/10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
            poster="https://ext.same-assets.com/3483074441/1353687220.png"
          >
            <source src="https://ext.same-assets.com/3483074441/3051910544.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
