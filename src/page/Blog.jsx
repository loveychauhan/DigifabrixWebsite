import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEO from "../component/SEO";
import BlogConstant from "../Constants/BlogsConstant";

const Blog = () => {
  return (
    <div className="bg-slate-950 text-slate-200 px-6 py-24">
      <SEO
        title="Manufacturing Technology & OEE Insights | DigiFabrix"
        description="Explore insights on OEE, manufacturing digitalization, MES, shopfloor automation, production monitoring and Industry 4.0 from DigiFabrix."
        canonical="https://digifabrix.com/blog"
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">
            Blog
          </h1>
          <p className="text-slate-400 mt-4 max-w-2xl">
            Insights, guides, and updates from the world of manufacturing
            technology.
          </p>
        </div>

        {/* Blog List */}
        <div className="space-y-10">
          {BlogConstant.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block border-b border-slate-800 py-10 first:pt-0"
            >
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <h2 className="text-xl font-semibold text-white transition group-hover:text-slate-200 md:text-2xl">
                  {post.title}
                </h2>

                <p className="max-w-3xl text-sm leading-6 text-slate-400">
                  {post.excerpt}
                </p>

                <span className="mt-2 text-sm font-medium text-slate-300">
                  Read article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
