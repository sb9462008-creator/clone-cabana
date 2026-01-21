import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-8 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mx-auto flex h-[60px] w-full max-w-[860px] items-center gap-7 rounded-[56px] border border-white/10 bg-[#0c0c0d]/80 pl-6 pr-4 backdrop-blur-[10px] shadow-[0_12px_28px_rgba(0,0,0,0.45)]">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid grid-cols-3 gap-0.5">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-primary rounded-sm" />
              ))}
            </div>
            <span className="text-white font-semibold text-sm tracking-tight">Cabana</span>
          </Link>
          <div className="hidden md:block h-6 w-px bg-white/10" />
          <nav className="hidden md:flex items-center gap-6 text-[12px] font-semibold text-white/90 tracking-[0.02em]">
            <a href="#figma-features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#testimonials" className="hover:text-white transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#faqs" className="hover:text-white transition-colors">
              FAQs
            </a>
          </nav>
          <a
            href="#pricing"
            className="ml-auto h-9 bg-primary hover:bg-primary/90 text-white px-6 rounded-full text-[12px] font-semibold transition-colors shadow-[inset_1px_1px_7px_rgba(255,255,255,0.12),inset_-2px_-2px_13px_rgba(0,0,0,0.34)]"
          >
            Get Cabana
          </a>
        </div>
      </div>
    </header>
  );
}
