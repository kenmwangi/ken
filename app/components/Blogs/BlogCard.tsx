import React from "react";

interface BlogCardProps {
  children: React.ReactNode;
}
const BlogCard = ({ children }: BlogCardProps) => {
  return (
    <article className="flex max-w-xl flex-col items-start justify-betwee">
      {children}
    </article>
  );
};

export default BlogCard;
