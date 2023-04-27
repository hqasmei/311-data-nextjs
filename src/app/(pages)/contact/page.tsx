import React from "react";
import SectionHeader from "@/app/components/sectionHeader";

const ContactPage = () => {
  return (
    <main className="flex w-full flex-1 flex-col">
      <SectionHeader title="Contact Us" />
      <section className="flex w-full items-center justify-center px-4">
        <div className="mt-4 flex max-w-xl flex-col space-y-2">
          <p className="text-center font-semibold">
            Don&#39;t See What You Need?
          </p>
          <p className="leading-7 text-gray-600">
            We want to build a tool that works for you. We are open to
            suggestions and feedback and would love the opportunity to get
            connected. Feel free to input your information in the contact form
            below and we will be sure to get back to you within 2-3 business
            days. Thank you!
          </p>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
