const testimonials = [
  {
    quote: "I have only good things to say about Cabana. There's nothing it hasn't been able to do for me since I've been using it. It's fully featured as far as design systems go but doesn't feel bloated or hard to use in any way.",
    name: "Jess Eddy",
    handle: "@jesseddy",
    avatar: "https://ext.same-assets.com/3483074441/2459286527.jpeg",
  },
  {
    quote: "There's few products out there that make designing in Figma so easy. It's streamlined my process, making things more efficient, and much more enjoyable. Using Cabana is a no-brainer. Seriously.",
    name: "Gabe Silva",
    handle: "@iamgsilva",
    avatar: "https://ext.same-assets.com/3483074441/3007582849.jpeg",
  },
  {
    quote: "Really sped up prototyping, making it easy for a developer like me to get something together on Figma. Highly recommend it especially for developers who don't know where to start when building out their UI.",
    name: "Amr Yousef",
    handle: "@amrfarid140",
    avatar: "https://ext.same-assets.com/3483074441/1450952515.png",
  },
  {
    quote: "Cabana fundamentally changed how we work. It's the most scaleable, well thought out design system out there. Proper game changer - couldn't recommend enough.",
    name: "Adrian Forster",
    handle: "@adrianforster",
    avatar: "https://ext.same-assets.com/3483074441/2750219720.jpeg",
  },
  {
    quote: "Cabana is everything you need to design kick-ass products! Totally worth the money for a developer like me. Thank you so much for building this Marc.",
    name: "Lazar Nikolov",
    handle: "@NikolovLazar",
    avatar: "https://ext.same-assets.com/3483074441/3670759046.jpeg",
  },
  {
    quote: "I really like that it covers almost everything one needs to build a website in Framer quickly. Premade components, text/color styles and icons are all useful. Definitely recommended to increase your Framer website shipping speed.",
    name: "Vaibhav Khulbe",
    handle: "@vaibhav_khulbe",
    avatar: "https://ext.same-assets.com/3483074441/3905969164.jpeg",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="pt-[70px] pb-0 px-5">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-[36px] md:text-[64px] font-semibold text-white text-center tracking-[-0.018em] leading-[1.1] mb-12 md:mb-16">
          Trusted by <span className="text-[#8b5cf6]">20,000+</span> Designers & Developers.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {testimonials.map((testimonial) => (
            <div key={testimonial.handle} className="space-y-5">
              <p className="text-[#cfd1d5] text-[13px] md:text-[14px] leading-[1.7]">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-semibold text-[13px]">{testimonial.name}</p>
                  <p className="text-[#80858f] text-[12px]">{testimonial.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mt-12">
          <p className="text-[#b9bbc1] text-[13px] font-light">
            The only Design System & UI Kit endorsed by
          </p>
          <img
            src="https://framerusercontent.com/images/S18IySdo29RumLPnh0y49HHdhBk.svg"
            alt="Tokens Studio"
            className="h-9 w-auto"
          />
        </div>
      </div>
    </section>
  );
}
