import Link from "next/link";
import React from "react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Container from "../Container";

const Footer = () => {
  return (
    <section className="border-t-[1px] border-neutral-100 pt-10">
      <Container>
        <div className="lg:flex flex-row items-center">
          <div className="flex mb-6 lg:mb-0 lg:mr-18 items-center">
            <Link
              href="/"
              className="inline-block text-neutral-500 mr-5 hover:text-slate-800 rounded-md p-1"
            >
              <FaGithub size={18} />
            </Link>

            <Link
              href="/"
              className="inline-block text-neutral-500 mr-5 hover:text-slate-800 rounded-md p-1"
            >
              <FaTwitter size={18} />
            </Link>

            <Link
              href="/"
              className="inline-block text-neutral-500 mr-5 hover:text-slate-800 rounded-md p-1"
            >
              <FaLinkedin size={18} />
            </Link>
          </div>
          <div className="flex mb-6 ml-auto lg:mb-0 items-center">
            <Link
              href="/about"
              className="inline-block mr-4 sm:mr-10 text-xs font-semibold text-gray-500"
            >
              About
            </Link>
            <Link
              href="/thoughts"
              className="inline-block mr-4 sm:mr-10 text-xs font-semibold text-gray-500"
            >
              Thoughts
            </Link>
          </div>
          <span className="inline-block ml-auto text-xs text-gray-500">
            &copy; Ken Mwangi, {new Date().getFullYear()}. All rights reserved
          </span>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
