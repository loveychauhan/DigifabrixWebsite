import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    {
      title: "Why Environment Monitoring is Critical in Manufacturing",
      desc: "Understand how temperature and humidity control impacts product quality and compliance.",
      date: "March 2026",
      slug: "/blog/environment-monitoring",
    },
    {
      title: "How OEE Improves Production Efficiency",
      desc: "A practical guide to measuring and improving overall equipment effectiveness.",
      date: "Feb 2026",
      slug: "/blog/oee-efficiency",
    },
    {
      title: "Digitizing Your Shopfloor: Where to Start",
      desc: "Steps to transform manual operations into data-driven systems.",
      date: "Jan 2026",
      slug: "/blog/shopfloor-digitization",
    },
  ];

  return (
    <div className="bg-slate-950 text-slate-200 px-6 py-24">
      <Helmet>
        <title>Blog | Manufacturing Insights & Guides</title>
        <meta
          name="description"
          content="Explore insights on manufacturing software, EMS, MES, OEE, and industrial automation."
        />
        <meta
          name="keywords"
          content="manufacturing blog, EMS insights, MES guide, OEE improvement, industry 4.0"
        />
        <link rel="canonical" href="https://yourdomain.com/blog" />
      </Helmet>

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
          {posts.map((post) => (
            <Link
              key={post.title}
              to={post.slug}
              className="block border-b border-slate-800 pb-6 group"
            >
              <p className="text-xs text-slate-500 mb-2">{post.date}</p>

              <h2 className="text-xl font-medium text-white group-hover:text-blue-400 transition">
                {post.title}
              </h2>

              <p className="text-slate-400 text-sm mt-2 max-w-2xl">
                {post.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
