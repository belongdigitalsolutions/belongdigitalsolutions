import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { motion } from "framer-motion";
import BlogCard from "../components/BlogCard";
import { blogCategories, blogs as fallbackBlogs } from "../data/blogs";
import { buildCanonical } from "../utils/seo";

const Blog = () => {
  const [active, setActive] = useState("All");
  const [blogs, setBlogs] = useState(fallbackBlogs);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const response = await axios.get("/data/blogs.json");
        setBlogs(response.data);
      } catch {
        setBlogs(fallbackBlogs);
      }
    };
    loadBlogs();
  }, []);

  const featured = blogs.find((blog) => blog.featured);

  const filtered = useMemo(() => {
    if (active === "All") return blogs;
    return blogs.filter((blog) => blog.category === active);
  }, [active, blogs]);

  return (
    <div>
      <Helmet>
        <title>Blog | BelongDigitalSolutions</title>
        <meta name="description" content="Insights, strategies, and growth marketing playbooks." />
        <link rel="canonical" href={buildCanonical("/blog")} />
      </Helmet>

      <section className="section-padding bg-white">
        <span className="badge">Blog</span>
        <h1 className="mt-4 font-display text-4xl font-semibold">Growth insights and ideas</h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          Stay ahead with our latest strategies on digital marketing, brand growth, and performance.
        </p>

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 rounded-3xl border border-neutral-100 bg-white p-6 shadow-soft"
          >
            <span className="text-xs uppercase tracking-widest text-accent">Featured</span>
            <h2 className="mt-2 font-display text-2xl font-semibold">{featured.title}</h2>
            <p className="mt-3 text-sm text-neutral-600">{featured.excerpt}</p>
            <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
              <span>{featured.readTime}</span>
              <span>{featured.date}</span>
            </div>
          </motion.div>
        )}

        <div className="mt-10 flex flex-wrap gap-3">
          {blogCategories.map((category) => (
            <button
              key={category}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                active === category
                  ? "border-accent bg-white text-accent shadow-sm"
                  : "border-neutral-200 text-neutral-600 hover:border-accent hover:text-accent"
              }`}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
