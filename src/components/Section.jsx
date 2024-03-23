import React from "react";
import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className,
  crosses,
  crossesOffset,
  customPadings,
  children,
  id,
}) => {
  return (
    <section
      id={id}
      className={`relative ${className} ${
        customPadings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? `lg:py-32 xl:py-40` : ``} `
      }`}
    >
      {children}
      <div
        className="hidden absolute top-0 left-5 w-0.25
       bg-stroke-1 md:block h-full 
       pointer-events-none lg:left-7.5 xl:left-10"
      />

      <div
        className="hidden absolute top-0 left-5 w-0.25
       bg-stroke-1 md:block h-full 
       pointer-events-none lg:right-7.5 xl:right-10"
      />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />

          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </section>
  );
};

export default Section;
