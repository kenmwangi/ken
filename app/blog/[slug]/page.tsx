import Container from "app/components/Container";
import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import React from "react";
import { Balancer } from "react-wrap-balancer";
import Mdx from "app/components/Utils/mdx";
import { getMDXComponent } from "next-contentlayer/hooks";

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
  const Content = getMDXComponent(blog.body.code);

  return (
    <section className="">
      <h1 className="font-bold text-3xl font-serif ">
        <Balancer>{blog.title}</Balancer>
      </h1>
      <div>
        <p>{blog.publishedAt}</p>
      </div>
      {/* <Content /> */}
      <Mdx code={blog.body.code} />
    </section>
  );
}
