import React from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  primary?: boolean;
}

const Heading = ({ title, subtitle, primary }: HeadingProps) => {
  return (
    <>
      <h2
        className={
          primary
            ? `font-bold tracking-tight text-gray-900 text-3xl sm:text-4xl`
            : `mt-3 text-lg font-semibold leading-6 text-gray-900 hover:text-gray-600`
        }
      >
        {title}
      </h2>
      <h3 className="mt-2 text-sm lg:text-lg leading-8 text-gray-600">
        {subtitle}
      </h3>
    </>
  );
};

export default Heading;
