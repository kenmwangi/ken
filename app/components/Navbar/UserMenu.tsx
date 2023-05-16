import Link from "next/link";
import React from "react";

const navItems = [
  { id: "1", href: "/blog", title: "Blog" },
  { id: "2", href: "/thoughts", title: "Thoughts" },
  { id: "3", href: "/about", title: "About" },
];

const UserMenu = () => {
  return (
    <div className="flex items-center gap-x-8">
      {navItems.map((navItem) => {
        const { id, href, title } = navItem;
        return (
          <Link
            href={href}
            key={id}
            className=" hover:bg-neutral-100 transition rounded-full px-3 py-1.5  hover:text-slate-600"
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default UserMenu;
