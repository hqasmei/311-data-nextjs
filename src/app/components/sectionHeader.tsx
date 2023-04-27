import React from "react";

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <section className="h-48 w-full bg-primaryDarkMain text-center">
      <h1 className="py-16 text-5xl font-bold  text-white ">{title}</h1>
    </section>
  );
};

export default SectionHeader;
