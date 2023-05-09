import React from "react";
import Avatar from "../Avatar";
import Link from "next/link";

interface BlogFooterProps {
  name: string;
  role: string;
}

const BlogFooter = ({ name, role }: BlogFooterProps) => {
  return (
    <div className="relative mt-8 flex items-center gap-x-4">
      <Avatar src="" />
      <div className="text-sm leading-6">
        <p className="font-semibold text-gray-900">
          <Link href="#">{name}</Link>
        </p>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default BlogFooter;
