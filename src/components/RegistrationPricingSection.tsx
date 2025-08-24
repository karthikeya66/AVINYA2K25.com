import { Users, Zap, CheckCircle, Star } from "lucide-react";
import { REGISTER_FORM_URL } from "@/lib/links";
import SpecialOfferCard from "./SpecialOfferCard";

const RegistrationPricingSection = () => {
  const plans = [
    {
      title: "Team Size",
      price: "2-4 Members",
      period: "Ideal for teams",
      description: "Perfect for collaborative building",
      features: [
        "Team of 2-4 members",
        "Individual registration available",
        "Team matching assistance",
        "Access to all workshops"
      ],
      buttonText: "Form Team",
      isRecommended: false,
      gradient: "from-indigo-500/80 to-violet-600/80",
      buttonGradient: "from-indigo-500 to-violet-600"
    },
    {
      title: "Early Bird",
      price: "₹700",
      period: "until Aug 31, 2025",
      description: "Best value with exclusive early benefits",
      features: [
        "Priority support",
        "Early access to resources",
        "Exclusive swag",
        "Mentorship sessions"
      ],
      buttonText: "Register Early",
      isRecommended: true,
      gradient: "from-cyan-400/80 to-violet-500/80",
      buttonGradient: "from-cyan-400 to-violet-500"
    },
    {
      title: "Regular",
      price: "Coming Soon",
      period: "Starting Sept 1, 2025",
      description: "Standard registration with full access",
      features: [
        "Access to all events",
        "Workshop materials",
        "Meals included",
        "Networking opportunities"
      ],
      buttonText: "Coming Soon",
      isRecommended: false,
      isDisabled: true,
      gradient: "from-gray-500/80 to-gray-600/80",
      buttonGradient: "from-gray-500 to-gray-600"
    }
  ];

  return (
    <section id="registration-pricing" className="py-16 md:py-24">
    <section id="pricing" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
<div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-[#3bb6ff] to-[#a259ff] bg-clip-text text-transparent">
              Registration & Pricing
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3bb6ff] to-[#a259ff] mx-auto rounded-full mb-12"></div>
        
          {/* Special Offer Card */}
          <div className="max-w-4xl mx-auto w-full mb-16">
            <SpecialOfferCard />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-full">
          {plans.map((plan, index) => (
            <div 
              key={plan.title}
              className={`relative bg-gradient-to-br ${plan.gradient} backdrop-blur-xl rounded-2xl p-6 text-white shadow-lg border border-white/10 transition-all duration-300 hover:-translate-y-2 ${
                plan.isRecommended ? 'scale-[1.03]' : ''
              }`}
            >
              {plan.isRecommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-400 to-violet-500 shadow-md">
                  RECOMMENDED
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
                {plan.price.includes('₹') ? (
                  <p className="text-3xl font-extrabold">
                    {plan.price}
                    {plan.period && (
                      <span className="text-sm font-normal text-gray-200"> {plan.period}</span>
                    )}
                  </p>
                ) : (
                  <p className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                    {plan.price}
                  </p>
                )}
                <p className="text-sm text-gray-100 mb-4">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-2 text-gray-100 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-white/80 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => {
                  if (!plan.isDisabled) {
                    window.open(REGISTER_FORM_URL, '_blank');
                  }
                }}
                className={`w-full py-2 rounded-xl font-medium ${
                  plan.isDisabled
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : `bg-gradient-to-r ${plan.buttonGradient} text-white hover:opacity-90`
                }`}
                disabled={plan.isDisabled}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    </section>
  );
};

export default RegistrationPricingSection;
