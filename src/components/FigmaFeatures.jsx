const features = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Powerful Components",
    description: "An endless choice of Components to help speed through your projects.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Variables Support",
    description: "This latest Figma feature is implemented throughout to help you customise rapidly.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
        <rect x="15" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
        <rect x="3" y="15" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
        <rect x="15" y="15" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Tokens Studio Support",
    description: "Optimised for Tokens Studio enabling you much more efficiency on your projects.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 9V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Auto-Layout ready",
    description: "Don't waste time messing around with Auto-Layout. Everything's done for you.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Variants to the max",
    description: "Components powered by Variants to improve your workflow even more.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
        <rect x="3" y="14" width="18" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Design Blocks",
    description: "Assemble full page sections fast on either Desktop, Tablet or Mobile screen sizes.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Dark Mode ready",
    description: "Every Component is Dark Mode ready saving you so much valuable time.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 3v18" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 12h18" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Color System",
    description: "A massively versatile colour system based on the popular TailwindUI palette.",
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 7V4H20V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 20H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Typography System",
    description: "Rock-solid type system perfectly suited for any screen size you choose.",
  },
];

export default function FigmaFeatures() {
  return (
    <section id="figma-features" className="pt-[70px] pb-0 px-5 scroll-mt-[100px]">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-[36px] md:text-[64px] font-semibold text-white text-center tracking-[-0.018em] leading-[1.1] mb-4">
          Designing in Figma? We've got you covered.
        </h2>
        <p className="text-[#80858f] text-center text-[16px] md:text-[18px] leading-[1.7] max-w-[820px] mx-auto mb-10 md:mb-12">
          With Figma's most powerful features optimized for Cabana, say goodbye to the old way of working, and hello to a new and improved workflow
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#141415] border border-[#222226] rounded-lg p-6 shadow-[0_0.6px_3px_rgba(0,0,0,0.02),0_2.3px_11.4px_rgba(0,0,0,0.09),0_10px_50px_rgba(0,0,0,0.24)]"
            >
              <div className="text-[#c4b5fd] mb-3">{feature.icon}</div>
              <h3 className="text-[#c4b5fd] font-medium text-[16px] leading-[1.2] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#b9bbc1] text-[12px] md:text-[14px] leading-[1.5]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <a
            href="https://www.figma.com/file/KqTeVex4GygeMSJtFQdRQE/Cabana---Tokens-Studio-(Preview)?type=design&mode=design&t=3s9NNRrLF0oNw2ZO-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#8b5cf6] text-[14px] hover:underline"
          >
            Preview in Figma
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
