"use client"
import EnquiryModal from "@/components/EnquiryModal"
import { useState } from "react";

export default function MasterPlan() {
  const [isModalOpen, setIsModalOpen] =  useState(false);
  return (
    <>
    <section className="py-12 md:py-20 bg-[#F7F1F7]">
      <div className="md:pl-[204px] mx-auto pl-4 ">
        {/* Header with Download Button */}
        <div className="flex flex-col md:flex-row md:items-start md:pr-[204px] pr-4 md:justify-between mb-8 md:mb-12 gap-4">
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl lg:text-[44px] font-extrabold mb-3 md:mb-4 text-[#221628] font-Urbanist">
              Master Plan
            </h2>
            <p className="text-[#433F3E] text-[14px] md:text-lg font-medium font-Urbanist max-w-2xl">
              Strategically located for seamless connectivity to all major landmarks
            </p>
          </div>
          <button className="bg-primary hover:bg-[#9a1751] hidden md:block text-white px-6 md:px-8 py-3 rounded-[4px] font-semibold font-Urbanist text-sm md:text-base transition-colors duration-300 shadow-md flex items-center gap-2 whitespace-nowrap cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <img src={'/download.svg'} className='w-5 h-5 object-contain'/>
            Download Brochure
          </button>
        </div>

        {/* Master Plan Image */}
        <div className="relative w-full h-[151px] md:h-[534px] rounded-md md:rounded-xl overflow-x-visible">
          <img 
            src="/master-plan-layout-design.png" 
            alt="Master Plan - Godrej Plots" 
            className="w-full h-full object-cover"
          />
        </div>
        <button className="bg-primary hover:bg-[#9a1751] md:hidden text-white mt-4.5 px-6 md:px-8 py-3 rounded-[4px] font-semibold font-Urbanist text-sm md:text-base transition-colors duration-300 shadow-md flex flx-row items-center gap-2 whitespace-nowrap cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <img src={'/download.svg'} className='w-5 h-5 object-contain'/>
            Download Brochure
          </button>

      </div>
    </section>
    <EnquiryModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Download Brochure"
      subtitle="Enter your name and number to get the brochure download instantly"
      openedEventTitle="Contact_form_opened_masterplan"
      submitEventTitle="Contact_form_submit_masterplan"
    />
    </>
  )
}