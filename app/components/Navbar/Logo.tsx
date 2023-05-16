import Link from "next/link";
import React from "react";
import { TbCircleLetterK } from "react-icons/tb";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <TbCircleLetterK size={32} className="cursor-pointer text-slate-800" />
      <div className="hidden md:block">EN</div>
    </Link>
  );
};

export default Logo;
