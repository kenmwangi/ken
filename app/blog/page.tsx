import React from "react";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import Container from "app/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Ken Mwangi",
  description:
    "Indulge into my thoughts, software development and open-source contributions",
};

const BlogPage = () => {
  return (
    <section className="max-w-screen-lg m-auto min-h-full  pb-20">
      <h1 className="font-extrabold px-[18px] text-5xl mb-16 mt-8 text-slate-800">
        Blog
      </h1>
      <div className="w-screen lg:w-full">
        {allBlogs
          .sort((first, second) => {
            if (new Date(first.publishedAt) > new Date(second.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post) => {
            const date = new Date(post.publishedAt);
            const formattedDate = new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(date);
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="cursor flex-col px-[12px] border-gray-300 bg-gray-50 filter-none hover:bg-gray-200 md:flex lg:rounded-lg">
                  <div className="py-[18px] flex flex-col justify-between leading-normal border-t border-gray-100 flex-[3]">
                    <div className="my-2">
                      <p className="text-2xl font-bold text-slate-900">
                        {post.title}
                      </p>
                    </div>
                    <p className="text-lg text-slate-500">{post.summary}</p>
                    <div className="flex text-xs my-[18px] text-gray-500 items-center">
                      <span>{post.author}</span> &nbsp; . &nbsp;{" "}
                      <span>{formattedDate}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default BlogPage;
