"use client"
import EnquiryModal from "@/components/EnquiryModal"
import { useState } from "react";
export default function Footer() {
  const [isModalOpen, setIsModalOpen] =  useState(false);

  return (
    <>
    <footer className="bg-[#222A28] text-white">
      {/* Disclaimer Section */}
      <div className="border-b border-[#4E5553]">
        <div className="max-w-7xl mx-auto px-4 md:px-0 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl lg:text-[44px] font-bold text-white text-center mb-6 md:mb-8 font-Urbanist">
            Disclaimer
          </h2>

          <div className="max-w-5xl mx-auto space-y-4 text-center">
            <p className="text-[#BDC0BF] text-[14px] leading-5 font-medium font-Urbanist">
              * The images, designs, and layouts displayed on this website are
              for representational purposes only and may not reflect the actual
              project. The developer reserves the right to make modifications,
              additions, or deletions to the project plan, specifications, and
              pricing without prior notice.
            </p>

            <p className="text-[#BDC0BF] text-[14px] leading-5 font-medium font-Urbanist">
              * All prices mentioned are indicative and subject to change. The
              final price will be determined based on the unit selected, floor
              level, and other factors. Please contact our sales team for the
              most current pricing and availability information.
            </p>

            <p className="text-[#BDC0BF] text-[14px] leading-5 font-medium font-Urbanist">
              * All amenities and facilities are subject to the terms and
              conditions laid down by the developer and may be modified based on
              government regulations, approvals, and project requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#222A28]">
        <div className="max-w-7xl mx-auto px-4 md:px-0 py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center">
            <p className="text-[#A0A0A0] text-sm font-Urbanist font-medium">
              Copyright © Authorised Marketing Partner
            </p>
            <span className="hidden md:inline text-[#A0A0A0]">|</span>
            <a
              href="https://snn-duomont.in/Terms&Condition.html"
              className="text-[#A0A0A0] hover:text-white transition-colors text-sm font-Urbanist font-medium"
            >
              Terms and Condition
            </a>
            <span className="hidden md:inline text-[#A0A0A0]">|</span>
            <a
              href="https://snn-duomont.in/Privacy-policy.html"
              className="text-[#A0A0A0] hover:text-white transition-colors text-sm font-Urbanist font-medium"
            >
              Privacy policy
            </a>
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-row gap-2 bg-white rounded-t-md p-4 itmes-center justify-between">
        <button className="bg-primary text-md  text-white px-8 py-3 rounded-sm font-semibold transition-colors flex items-center gap-2 shadow-md cursor-pointer min-w-40"
          onClick={()=>{setIsModalOpen(true)}}>
        
          Get Callback
        </button>
        <button className="border text-md border-primary text-primary px-8 py-3 rounded-sm font-semibold transition-colors flex items-center gap-2 cursor-pointer min-w-40">
          <img
            src="/whatsapp.svg"
            alt="whatsapp Icon"
            className="w-4.5 h-4.5"
          />
          Whatsapp
        </button>
      </div>
    </footer>
    <EnquiryModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Get Callback"
      subtitle="Enter your name and number to get a callback from our sales team"
      openedEventTitle="Contact_form_opened_footer"
      submitEventTitle="Contact_form_submit_footer"
    />
    </>
  ); 
}
