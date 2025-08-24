import React from "react";
import { REGISTER_FORM_URL } from "@/lib/links";

const SpecialOfferCard = () => {
  return (
    <div className="max-w-4xl mx-auto bg-pink-50 p-6 rounded-2xl shadow-md text-center">
      <h2 className="text-xl font-bold text-pink-600 mb-4">
        ⭐ Special Offer – All-Girls Teams
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Early Bird */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <p className="text-3xl font-bold text-pink-600 mb-2">₹650</p>
          <p className="text-gray-600 mb-4">Early Bird (until Aug 31)</p>
          <button
            onClick={() => window.open(REGISTER_FORM_URL, '_blank')}
            className="w-full max-w-[180px] px-4 py-2 
                       bg-gradient-to-r from-pink-500 to-pink-600 
                       text-white font-medium rounded-lg 
                       shadow-md hover:from-pink-600 hover:to-pink-700 
                       transition duration-200"
          >
            Register Early
          </button>
        </div>

        {/* Regular */}
        <div className="bg-white p-6 rounded-xl shadow-sm opacity-75">
          <p className="text-3xl font-bold text-gray-400 mb-2">₹750</p>
          <p className="text-gray-500 mb-4">Regular (Coming Soon)</p>
          <button
            disabled
            className="w-full max-w-[180px] px-4 py-2 
                     bg-gray-300 text-gray-500 font-medium rounded-lg 
                     cursor-not-allowed"
          >
            Coming Soon
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        * All prices are per team member
      </p>
    </div>
  );
};

export default SpecialOfferCard;
