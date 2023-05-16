import React from "react";
import Logo from "./Logo";
import Container from "../Container";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="border-b-[1px] border-neutral-100">
      <Container>
        <div className="top-0 left-0 py-6 w-full flex-row items-center justify-between  text-slate-900 md:flex">
          <Logo />
          <UserMenu />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
