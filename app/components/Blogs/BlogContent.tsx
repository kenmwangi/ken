import Link from "next/link";
import React from "react";

interface BlogContentProps {
  title: string;
  content: string;
}

const BlogContent = ({ title, content }: BlogContentProps) => {
  return (
    <div className="group relative">
      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
        <Link href="#">
          <span className="absolute inset-0"></span>
          {title}
        </Link>
      </h3>
      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
        {content}
      </p>
    </div>
  );
};

export default BlogContent;
