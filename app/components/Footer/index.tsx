import Link from "next/link";
import React from "react";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Container from "../Container";

const footerNavs = [
  { id: "1", href: "/about", title: "About" },
  { id: "2", href: "/blog", title: "Blog" },
  { id: "3", href: "/thoughts", title: "Thoughts" },
];

const github = <FaGithub />;
const twitter = <FaTwitter />;
const linkedin = <FaLinkedin />;

const socialLinks = [
  { id: "1", href: "https://github.com/kenmwangi", icon: github },
  { id: "2", href: "https://twitter.com/ken_cipher", icon: twitter },
  { id: "3", href: "https://www.linkedin.com/in/kkmwangi/", icon: linkedin },
];

const Footer = () => {
  return (
    <section className="border-t-[1px] border-neutral-100 p-12">
      <Container>
        <div className="flex flex-col gap-y-6 lg:justify-between lg:gap-y-0 lg:flex-row mb-6 lg:mb-0 lg:mr-18 lg:items-center">
          <div className="">
            {footerNavs.map((footerNav) => {
              const { id, href, title } = footerNav;
              return (
                <Link
                  key={id}
                  href={href}
                  className="hover:bg-neutral-100 text-sm transition rounded-full px-3 py-1.5  hover:text-slate-600"
                >
                  {title}
                </Link>
              );
            })}
          </div>

          <div>
            <span className="inline-block ml-auto text-xs text-gray-500">
              &copy; Ken Mwangi, {new Date().getFullYear()}. All rights reserved
            </span>
          </div>

          <div className="">
            {socialLinks.map((socialLink) => {
              const { id, href, icon } = socialLink;
              return (
                <Link
                  key={id}
                  href={href}
                  target="_blank"
                  className="inline-block text-neutral-500 mr-5 hover:text-slate-800 rounded-md p-1"
                >
                  {icon}
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
