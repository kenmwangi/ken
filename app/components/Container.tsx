import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-screen-lg mx-auto px-6 lg:px-8">{children}</div>;
};

export default Container;
