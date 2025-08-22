import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who can participate in AVINYA 2K25?",
      answer: "Students from all universities and colleges across India can participate. While primarily designed for AI/CS students, we welcome participants from all technical backgrounds who are passionate about AI and innovation."
    },
    {
      question: "Can non-Anurag University students join?",
      answer: "Absolutely! AVINYA 2K25 is a national-level event open to students from all universities and colleges across India. We encourage diverse participation from different institutions."
    },
    {
      question: "Do I need prior coding experience?",
      answer: "While basic programming knowledge is recommended, we welcome participants of all skill levels. Our bootcamp sessions will help beginners get up to speed, and experienced mentors will be available throughout the event."
    },
    {
      question: "Is food & accommodation provided?",
      answer: "Yes! We provide meals, snacks, and refreshments throughout the 24-hour event. For outstation participants, we can help arrange accommodation at nearby facilities (additional cost may apply)."
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, chargers, any hardware you might need, and your enthusiasm! We'll provide WiFi, workspace, meals, and all the energy drinks you need to keep coding through the night."
    },
    {
      question: "What's the refund policy?",
      answer: "Registration fees are non-refundable after September 1st, 2025. However, you can transfer your registration to another eligible participant from your institution with prior notice."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-accent-cyan text-neon mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass rounded-xl border border-card-border/20 overflow-hidden hover-scale transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-text-primary pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 text-primary">
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6" />
                  ) : (
                    <ChevronDown className="h-6 w-6" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-card-border/10">
                  <p className="text-text-secondary leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 text-center">
          <div className="glass rounded-xl p-6 border border-accent-cyan/30 inline-block">
            <p className="text-accent-cyan font-semibold mb-2">Still have questions?</p>
            <p className="text-text-secondary">
              Reach out to our team through the contact section below. We're here to help!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;