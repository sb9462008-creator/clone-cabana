import {Accordion,AccordionContent,AccordionItem,AccordionTrigger,} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the difference between the Framer and Figma products?",
    answer: "The Figma product is a comprehensive design system built specifically for Figma, including components, variables, tokens, and design blocks. The Framer product is optimized for building websites directly in Framer with smart components and pre-built design blocks.",
  },
  {
    question: "How is Cabana different from other Design Systems or UI Kits?",
    answer: "Cabana is built with real-world usage in mind, featuring extensive variable support, Tokens Studio integration, and a comprehensive color system based on TailwindUI. It's designed to speed up your workflow significantly while maintaining design consistency.",
  },
  {
    question: "How can I be confident in the product before making a purchase?",
    answer: "You can preview the Figma file directly to see the quality of components and design blocks. We also have extensive documentation and a community of 20,000+ designers who can vouch for the product quality.",
  },
  {
    question: "Is there a discount for Students or Tutors?",
    answer: "Yes! We offer special discounts for students and educators. Please reach out to support@cabanaui.com with proof of your academic status to receive your discount code.",
  },
  {
    question: "Does Cabana for Figma include the latest Figma features?",
    answer: "Absolutely! Cabana is continuously updated to support the latest Figma features including Variables, Tokens Studio support, Auto-Layout v4, and more. We're committed to keeping the product current with Figma's evolving feature set.",
  },
];

export default function FAQ() {
  return (
    <section id="faqs" className="py-[56px] px-6">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-[36px] md:text-[64px] font-semibold text-white text-center tracking-[-0.018em] leading-[1.1] mb-10 md:mb-12">
          Oh, and if you have any questions...
        </h2>

        <Accordion type="single" collapsible className="space-y-0 border-t border-[#222226]">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-[#222226] px-4 md:px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-white hover:no-underline py-5 text-left text-[14px] md:text-[16px]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#cfd1d5] text-[13px] md:text-[14px] leading-[1.7] pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
