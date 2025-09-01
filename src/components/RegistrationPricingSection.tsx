import { CheckCircle } from "lucide-react";
import { REGISTER_FORM_URL } from "@/lib/links";
import { useEffect } from "react";
import CherryBlossomEffect from "./CherryBlossomEffect";

const CautionTape = () => (
  <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
    <div 
      className="absolute h-9 w-[150%] -left-1/4 -rotate-6"
      style={{
        background: 'repeating-linear-gradient(45deg, #fcd34d, #fcd34d 25px, #111827 25px, #111827 50px)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
        top: '15%',
        overflow: 'hidden'
      }}
    >
      <div className="tape-text whitespace-nowrap text-black font-bold text-sm md:text-base leading-relaxed">
        &nbsp;CAUTION&nbsp;CAUTION&nbsp;CAUTION&nbsp;CAUTION&nbsp;CAUTION&nbsp;
      </div>
    </div>
    <div 
      className="absolute h-9 w-[150%] -left-1/4 -rotate-6"
      style={{
        background: 'repeating-linear-gradient(45deg, #fcd34d, #fcd34d 25px, #111827 25px, #111827 50px)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
        bottom: '20%',
        overflow: 'hidden',
        animationDelay: '-2.5s'
      }}
    >
      <div className="tape-text whitespace-nowrap text-black font-bold text-sm md:text-base leading-relaxed">
        &nbsp;OFFER ENDED&nbsp;OFFER ENDED&nbsp;OFFER ENDED&nbsp;
      </div>
    </div>
  </div>
);

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
      price: "Offer Ended",
      description: "Early bird period has ended",
      features: [
        "Priority support",
        "Early access to resources",
        "Exclusive swag",
        "Mentorship sessions"
      ],
      buttonText: "Offer Ended",
      isDisabled: true,
      isRecommended: false,
      gradient: "from-gray-400/80 to-gray-500/80",
      buttonGradient: "from-gray-400 to-gray-500"
    },
    {
      title: "Regular",
      price: "₹750",
      period: "Open Now",
      description: "Standard registration with full access",
      features: [
        "Access to all events",
        "Workshop materials",
        "Meals included",
        "Networking opportunities"
      ],
      buttonText: "Register Now",
      isDisabled: false,
      isRecommended: true,
      gradient: "from-green-400/80 to-blue-500/80",
      buttonGradient: "from-green-400 to-blue-500"
    }
  ];

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll-text {
        from { transform: translateX(0%); }
        to { transform: translateX(-50%); }
      }
      .tape-text {
        display: inline-block;
        animation: scroll-text 5s linear infinite;
        padding: 8px 0;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="registration-pricing" className="py-16 md:py-24 bg-transparent overflow-visible">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white leading-relaxed">
            <span className="bg-gradient-to-r from-[#3bb6ff] to-[#a259ff] bg-clip-text text-transparent">
              Register Now
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Secure your spot at the most anticipated event of the year. Limited seats available!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3bb6ff] to-[#a259ff] mx-auto rounded-full mb-12"></div>
        </div>

        {/* Special Offer */}
        <div className="flex justify-center mb-20 relative">
          <CherryBlossomEffect targetId="special-offer" />
          <div 
            id="special-offer"
            className="relative w-full max-w-4xl backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 overflow-visible"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 240, 245, 0.95) 0%, rgba(255, 228, 230, 0.95) 100%)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div className="relative z-10">
              <h2 className="text-center text-2xl md:text-3xl font-bold text-pink-600 mb-8 leading-relaxed relative z-10">
                <span className="text-pink-400">🌸</span> Special Offer – All-Girls Teams <span className="text-pink-400">🌸</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Early Bird Closed */}
                <div className="relative rounded-2xl p-6 text-center shadow-lg overflow-hidden bg-white/80 backdrop-blur-sm border border-pink-200 flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white opacity-60"></div>
                  <CautionTape />
                  <div className="relative z-10 flex flex-col flex-grow">
                    <p className="text-4xl font-bold text-pink-400 mb-2 leading-relaxed">₹650</p>
                    <p className="text-pink-500 mb-4 leading-relaxed font-medium">Early Bird – Offer Ended</p>
                    <div className="mt-auto">
                      <button 
                        className="w-full h-12 bg-gray-600 text-gray-300 font-bold rounded-full cursor-not-allowed"
                        disabled
                      >
                        Offer Ended
                      </button>
                    </div>
                  </div>
                </div>
                {/* Regular Open */}
                <div className="rounded-2xl p-6 text-center shadow-lg border border-pink-200 bg-white/90 backdrop-blur-sm relative overflow-hidden flex flex-col">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white opacity-60"></div>
                  <div className="relative z-10 flex flex-col flex-grow">
                    <p className="text-4xl font-bold text-pink-600 mb-2 leading-relaxed">₹750</p>
                    <p className="text-pink-500 mb-4 leading-relaxed font-medium">Regular – Open Now</p>
                    <div className="mt-auto">
                      <button 
                        className="w-full h-12 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full transition-all hover:scale-105"
                        onClick={() => window.open(REGISTER_FORM_URL, '_blank')}
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-pink-600/80 mt-6 text-sm leading-relaxed font-medium relative z-10">* All prices are per team member</p>
            </div>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-full">
          {plans.map((plan) => (
            <div 
              key={plan.title}
              className={`relative bg-gradient-to-br ${plan.gradient} backdrop-blur-xl rounded-2xl p-6 text-white shadow-lg border border-white/10 transition-all duration-300 hover:-translate-y-2 overflow-visible bg-transparent ${
                plan.isDisabled ? 'opacity-90' : ''
              } flex flex-col`}
            >
              {plan.isDisabled && <CautionTape />}
              
              <div className="relative z-10 flex flex-col flex-grow">
                {plan.isRecommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 shadow-md leading-relaxed">
                    RECOMMENDED
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white leading-relaxed">{plan.title}</h3>
                  <p className={`font-extrabold leading-relaxed ${
                    plan.price.includes('₹') ? 'text-3xl' : 'text-2xl text-gray-50'
                  }`}>
                    {plan.price}
                    {plan.period && (
                      <span className="block text-sm font-normal text-gray-200 mt-1 leading-relaxed">
                        {plan.period}
                      </span>
                    )}
                  </p>
                  <p className="text-sm text-gray-200 mt-2 leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-2 text-gray-200 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start leading-relaxed">
                      <CheckCircle className="h-4 w-4 text-white/60 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <button 
                    onClick={() => !plan.isDisabled && window.open(REGISTER_FORM_URL, '_blank')}
                    className={`w-full h-12 rounded-xl font-medium transition-all leading-relaxed ${
                      plan.isDisabled
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        : `bg-gradient-to-r ${plan.buttonGradient} text-white hover:opacity-90 hover:shadow-lg`
                    }`}
                    disabled={plan.isDisabled}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegistrationPricingSection;
