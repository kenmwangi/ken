import React from "react";
import Link from "next/link";

interface BlogHeadingProps {
  time?: string;
  tags: string;
}

const BlogHeading = ({ time, tags }: BlogHeadingProps) => {
  return (
    <div className="flex items-center text-xs gap-x-4">
      <time className="text-gray-500">{time}</time>
      <Link
        href="#"
        className="
      relative
      z-10
      rounded-full
      bg-gray-50
      px-3
      py-1.5
      font-medium
      text-gray-600
      hover:bg-gray-100
      "
      >
        {tags}
      </Link>
    </div>
  );
};

export default BlogHeading;
