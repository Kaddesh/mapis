import Image from "next/image";
import React from "react";

const QuoteInformation = () => {
  return (
    <div className="flex flex-col w-full px-6 py-8 border rounded-lg mb-5 ">

      <div className="flex items-center justify-between my-3">
        <p className="font-medium">Quote Information</p>
        <p className="text-slate-400 text-xs">Expected delivery date: 2024-12-02</p>
      </div>

      <div className="flex gap-8">
        <div className="w-[60%] grid grid-cols-[1fr,2fr] text-sm leading-8 ">
          <div className="text-slate-400">
            <p>Title</p>
            <p>RFQ No</p>
            <p>Requestor</p>
            <p>Status</p>
            <p>Department</p>
          </div>
          <div>
            <p>Request for equipment</p>
            <p>RQ #01234</p>
            <div className="flex items-start gap-2">
              <div className="h-6 w-6 rounded-full bg-[#FFECE5] text-sm flex items-center justify-center">
                JD
              </div>
              <p>
                Jane Doe{" "}
                <span className="inline-block h-1 w-1 rounded-full bg-slate-400 mx-2"></span>
                <span className="text-slate-400">Head Nurse Pediatrics</span>
              </p>
            </div>
            
            <p className="inline-block bg-[#FFECE5] px-1 rounded-full text-xs text-[#F56630]">Awaiting</p>
           
            <p>Maternity</p>
          </div>
        </div>

        <div className="w-[30%] h-auto border rounded-md text-sm p-4 mr-3 mb-24">
          <div className="flex gap-2 items-center">
            <Image src="/assets/building-5.svg" alt="logo-client" width={20} height={20} />
            <p className="text-slate-400 text-xs">Client</p>
          </div>
          <div className="flex gap-2 mt-2 ">
            <div className="h-6 w-6 rounded-full bg-[#FFECE5] text-sm flex items-center justify-center">
              W
            </div>
            <div className="flex flex-col">
              <p>Westend Hospital</p>
              <p className="text-slate-400 text-xs">Clear Street</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteInformation;
