import Container from "app/components/Container";
import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import React from "react";
import { Balancer } from "react-wrap-balancer";
import Mdx from "app/components/Utils/mdx";
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug);
  if (!blog) {
    notFound();
  }
  // const Content = getMDXComponent(blog.body.code);
  const date = new Date(blog.publishedAt);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(date);

  return (
    <section className="pb-20">
      <div className="prose mx-auto w-full max-w-screen-md sm:mx-auto">
        <h1 className="mb-0 !border-b-0 !pb-0 font-extrabold text-3xl text-slate-900 ">
          <Balancer>{blog.title}</Balancer>
        </h1>
        <div className="mt-0 mb-0 text-xs flex items-center gap-x-4">
          <Link
            href="https://www.twitter.com/ken_cipher"
            className="no-underline hover:underline"
          >
            {blog.author}
          </Link>
          <span className="text-neutral-500">{formattedDate}</span>
        </div>
        {/* <Content /> */}
        <Mdx code={blog.body.code} />
      </div>
    </section>
  );
}
