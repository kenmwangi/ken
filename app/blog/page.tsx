import React from "react";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import Container from "app/components/Container";

const BlogPage = () => {
  return (
    <Container>
      <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
      {allBlogs
        .sort((first, second) => {
          if (new Date(first.publishedAt) > new Date(second.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <div key={post.slug} className="w-full flex-col space-y-1 mb-4">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            <p>{post.summary}</p>
          </div>
        ))}
    </Container>
  );
};

export default BlogPage;
