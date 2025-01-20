import React from "react";

function ReturnPolicy() {
  return (
    <div className="mt-20 w-full h-auto bg-[#FAF4F4] flex flex-wrap justify-center gap-8 py-8 poppins">
      {/* Free Delivery */}
      <div className="w-full sm:w-[376px] h-auto text-center sm:text-left">
        <h1 className="font-medium text-[24px] sm:text-[32px]">
          Free Delivery
        </h1>
        <p className="text-[16px] sm:text-[20px] text-[#9F9F9F] mt-2">
          For all orders over $50, consectetur adipiscing elit.
        </p>
      </div>

      {/* 90 Days Return */}
      <div className="w-full sm:w-[376px] h-auto text-center sm:text-left">
        <h1 className="font-medium text-[24px] sm:text-[32px]">
          90 Days Return
        </h1>
        <p className="text-[16px] sm:text-[20px] text-[#9F9F9F] mt-2">
          If goods have problems, consectetur adipiscing elit.
        </p>
      </div>

      {/* Secure Payment */}
      <div className="w-full sm:w-[376px] h-auto text-center sm:text-left">
        <h1 className="font-medium text-[24px] sm:text-[32px]">
          Secure Payment
        </h1>
        <p className="text-[16px] sm:text-[20px] text-[#9F9F9F] mt-2">
          100% secure payment, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
}

export default ReturnPolicy;
