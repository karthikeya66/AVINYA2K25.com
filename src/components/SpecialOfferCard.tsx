import React from "react";
import { REGISTER_FORM_URL } from "@/lib/links";
import CherryBlossomEffect from "./CherryBlossomEffect";

const SpecialOfferCard = () => {
  const cardId = 'special-offer-card';

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div 
        id={cardId}
        className="bg-white rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden"
      >
        <h2 className="text-center text-2xl md:text-3xl font-bold text-pink-500 mb-8">
          <span className="text-yellow-400">⭐</span> Special Offer – All-Girls Teams
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Early Bird */}
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
            <p className="text-4xl font-bold text-pink-500 mb-2">₹650</p>
            <p className="text-gray-600 mb-4">Early Bird (until Aug 31)</p>
            <button
              onClick={() => window.open(REGISTER_FORM_URL, '_blank')}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105"
            >
              Register Early
            </button>
          </div>

          {/* Regular */}
          <div className="bg-gray-100 rounded-2xl p-6 text-center shadow-lg">
            <p className="text-4xl font-bold text-gray-400 mb-2">₹750</p>
            <p className="text-gray-500 mb-4">Regular (Coming Soon)</p>
            <button
              disabled
              className="bg-gray-400 text-white font-bold py-3 px-8 rounded-full cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-6 text-sm">
          * All prices are per team member
        </p>
      </div>
      
      <CherryBlossomEffect targetId={cardId} />
    </div>
  );
};

export default SpecialOfferCard;
