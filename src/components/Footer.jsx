import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-[60px] px-6 border-t border-white/5">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="grid grid-cols-3 gap-0.5">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-white rounded-sm" />
                ))}
              </div>
              <span className="text-white font-semibold text-base tracking-tight">Cabana</span>
            </div>

            <div className="text-[#b9bbc1] text-[12px] leading-[1.5] mb-3">
              <p>&copy;2025 Cabana.</p>
              <p>All rights reserved.</p>
            </div>

            <p className="text-[#b9bbc1] text-[12px] leading-[1.5]">
              Originally created by{" "}
              <a href="https://x.com/@mrcndrw" className="text-white hover:underline">
                Marc Andrew
              </a>
              .
            </p>
          </div>

          <div className="flex-1">
            <nav className="space-y-2">
              <Link to="/" className="block text-white text-[13px] font-semibold hover:text-primary transition-colors">
                Home
              </Link>
              <a href="#figma-features" className="block text-white text-[13px] font-semibold hover:text-primary transition-colors">
                Features
              </a>
              <a href="#testimonials" className="block text-white text-[13px] font-semibold hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="#pricing" className="block text-white text-[13px] font-semibold hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#faqs" className="block text-white text-[13px] font-semibold hover:text-primary transition-colors">
                FAQs
              </a>
            </nav>
          </div>

          <div className="flex-1">
            <div className="space-y-2">
              <a
                href="#pricing"
                className="block text-white text-[13px] font-semibold hover:text-primary transition-colors"
              >
                Get Cabana
              </a>
              <a
                href="https://www.figma.com/file/KqTeVex4GygeMSJtFQdRQE/Cabana---Tokens-Studio-(Preview)?type=design&mode=design&t=3s9NNRrLF0oNw2ZO-1"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white text-[13px] font-semibold hover:text-primary transition-colors"
              >
                Preview in Figma
              </a>
            </div>
          </div>
        </div>

        <p className="text-[#5a616e] text-[12px] text-center leading-[1.7] mt-10">
          Cabana is not affiliated with Figma, nor is it endorsed by or sponsored by Figma or Framer.
        </p>
      </div>
    </footer>
  );
}
