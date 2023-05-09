import React from "react";
import BlogCard from "./BlogCard";
import BlogHeading from "./BlogHeading";
import BlogContent from "./BlogContent";
import BlogFooter from "./BlogFooter";
import sampleBlogs from "../../data";

const FeatureBlogs = () => {
  return (
    <>
      <section className="py-24 sm:py-32 max-w-2xl mx-auto mt-10  border-t border-gray-200 pt-10 sm:mt-16 lg:mx-0 lg:max-w-none ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-16 gap-y-16">
          {sampleBlogs.map((sampleBlog) => {
            const { id, time, tags, title, content, name, role } = sampleBlog;
            return (
              <BlogCard key={id}>
                <BlogHeading time={time} tags={tags} />
                <BlogContent title={title} content={content} />
                <BlogFooter name={name} role={role} />
              </BlogCard>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FeatureBlogs;
