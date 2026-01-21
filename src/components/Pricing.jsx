import { createContext, useContext, useEffect, useRef, useState } from "react";

const pricingPlans = {
  individual: [
    {
      name: "Everything",
      price: "$119",
      features: [
        { text: "Single User License", highlight: false },
        { text: "Includes everything in Figma and Framer", highlight: true },
        { text: "Bonus Tokens Studio Tutorial narrated by Ian Turk", highlight: true },
        { text: "Access to the Tokens Studio Slack Community", highlight: true },
        { text: "Receive 25% OFF Framer (Pro Annual Subscription)", highlight: true },
        { text: "Receive 20% OFF Supa Palette (Lifetime License)", highlight: true },
        { text: "Receive 10% OFF Charts Supply (Lifetime License)", highlight: true },
      ],
      featured: true,
    },
    {
      name: "Figma",
      price: "$99",
      features: [
        { text: "Single User License", highlight: false },
        { text: "Includes *all* versions of Cabana for Figma (Variables, Styles, Tokens Studio)", highlight: true },
        { text: "3300+ Icons (Universal + Tabler)", highlight: false },
        { text: "630 Text, Color and Effects Styles", highlight: false },
        { text: "34 Desktop & Mobile examples", highlight: false },
        { text: "3500+ Design Blocks in Lo/Mid Fidelity (Desktop, Tablet & Mobile)", highlight: false },
      ],
      featured: false,
    },
    {
      name: "Framer",
      price: "$79",
      features: [
        { text: "Single User License", highlight: false },
        { text: "Includes Cabana for Framer", highlight: true },
        { text: "200+ Smart Components", highlight: false },
        { text: "6000+ Open Source Icons", highlight: false },
        { text: "200+ Design Blocks", highlight: false },
        { text: "170+ Color Styles", highlight: false },
        { text: "120+ Gradient Styles", highlight: false },
        { text: "72 Typography Styles", highlight: false },
      ],
      featured: false,
    },
  ],
  team: [
    {
      name: "Everything",
      price: "$169",
      features: [
        { text: "Team License", highlight: false },
        { text: "Includes everything in Figma and Framer", highlight: true },
        { text: "Bonus Tokens Studio Tutorial narrated by Ian Turk", highlight: true },
        { text: "Access to the Tokens Studio Slack Community", highlight: true },
        { text: "Receive 25% OFF Framer (Pro Annual Subscription)", highlight: true },
        { text: "Receive 20% OFF Supa Palette (Lifetime License)", highlight: true },
        { text: "Receive 10% OFF Charts Supply (Lifetime License)", highlight: true },
      ],
      featured: true,
    },
    {
      name: "Figma",
      price: "$169",
      features: [
        { text: "Team License", highlight: false },
        { text: "Includes *all* versions of Cabana for Figma (Variables, Styles, Tokens Studio)", highlight: true },
        { text: "3300+ Icons (Universal + Tabler)", highlight: false },
        { text: "630 Text, Color and Effects Styles", highlight: false },
        { text: "34 Desktop & Mobile examples", highlight: false },
        { text: "3500+ Design Blocks in Lo/Mid Fidelity (Desktop, Tablet & Mobile)", highlight: false },
      ],
      featured: false,
    },
    {
      name: "Framer",
      price: "$169",
      features: [
        { text: "Team License", highlight: false },
        { text: "Includes Cabana for Framer", highlight: true },
        { text: "200+ Smart Components", highlight: false },
        { text: "6000+ Open Source Icons", highlight: false },
        { text: "200+ Design Blocks", highlight: false },
        { text: "170+ Color Styles", highlight: false },
        { text: "120+ Gradient Styles", highlight: false },
        { text: "72 Typography Styles", highlight: false },
      ],
      featured: false,
    },
  ],
};

const PricingContext = createContext(null);

function usePricingContext() {
  const context = useContext(PricingContext);
  if (!context) {
    throw new Error("PricingContext must be used within Pricing");
  }
  return context;
}

function PricingContent() {
  const { plan, setPlan } = usePricingContext();
  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current += 1;
  }, [plan]);

  return (
    <section id="pricing" className="pt-[59px] pb-[85px] px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[36px] md:text-[64px] font-semibold text-white text-center tracking-[-0.018em] leading-[1.1] mb-4">
          Choose the product that fits your needs.
        </h2>
        <p className="text-[#80858f] text-center text-[16px] md:text-[18px] leading-[1.7] mb-1">
          Have a team larger than 10?
        </p>
        <p className="text-[#80858f] text-center text-[16px] md:text-[18px] leading-[1.7] mb-10 md:mb-12">
          Email support@cabanaui.com for pricing.
        </p>
        <div className="flex justify-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-[#18181b] border border-[#222226] rounded-full p-1 h-10">
            <button
              onClick={() => setPlan("individual")}
              className={`flex items-center gap-2 h-8 px-4 rounded-full text-[12px] font-semibold transition-colors ${
                plan === "individual"
                  ? "bg-primary text-white"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Individual
            </button>
            <button
              onClick={() => setPlan("team")}
              className={`flex items-center gap-2 h-8 px-4 rounded-full text-[12px] font-semibold transition-colors ${
                plan === "team"
                  ? "bg-primary text-white"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Team
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans[plan].map((pricingPlan) => (
            <div
              key={pricingPlan.name}
              className={`rounded-[18px] p-8 ${
                pricingPlan.featured
                  ? "border border-primary bg-[linear-gradient(155deg,rgba(255,255,255,0.02),rgba(255,255,255,0.03))] shadow-[0_0.8px_4px_rgba(0,0,0,0.37),0_2.4px_12px_rgba(0,0,0,0.35),0_6.3px_32px_rgba(0,0,0,0.28),0_20px_100px_rgba(0,0,0,0.04)]"
                  : "border border-white/10 bg-[#141415]"
              }`}
            >
              <p className="text-primary text-[12px] font-semibold uppercase tracking-widest mb-2">
                {pricingPlan.name}
              </p>
              <p className="text-[48px] md:text-[64px] font-semibold text-white tracking-[-0.018em] leading-[1.1] mb-6">
                {pricingPlan.price}
              </p>

              <ul className="space-y-3 mb-8">
                {pricingPlan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span
                      className={`text-[13px] md:text-[14px] leading-[1.4] ${
                        feature.highlight ? "text-[#a78bfa] font-semibold" : "text-[#cfd1d5]"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full h-12 rounded-full text-[14px] font-semibold transition-colors ${
                  pricingPlan.featured
                    ? "bg-primary hover:bg-primary/90 text-white shadow-[inset_1px_1px_7px_rgba(255,255,255,0.12),inset_-2px_-2px_13px_rgba(0,0,0,0.34)]"
                    : "bg-[#2c2d30] hover:bg-[#34353a] text-white"
                }`}
              >
                Buy One
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 md:mt-12">
          <div className="inline-flex items-center gap-2 text-[#80858f] text-[12px]">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2"/>
            </svg>
            All payments are secured by <span className="text-[#b9bbc1]">256-bit TLS Encryption.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Pricing() {
  const [plan, setPlan] = useState("individual");
  const initialPlanRef = useRef(plan);

  useEffect(() => {
    if (initialPlanRef.current !== plan) {
      initialPlanRef.current = plan;
    }
  }, [plan]);

  return (
    <PricingContext.Provider value={{ plan, setPlan }}>
      <PricingContent />
    </PricingContext.Provider>
  );
}
