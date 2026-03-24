import React from "react";
import { motion } from "framer-motion";

const BlogCard = ({ blog }) => (
  <motion.article
    whileHover={{ y: -4 }}
    className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm transition hover:shadow-soft"
  >
    <span className="text-xs uppercase tracking-widest text-neutral-400">{blog.category}</span>
    <h3 className="mt-3 font-display text-xl font-semibold text-secondary">{blog.title}</h3>
    <p className="mt-2 text-sm text-neutral-600">{blog.excerpt}</p>
    <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
      <span>{blog.readTime}</span>
      <span>{blog.date}</span>
    </div>
  </motion.article>
);

export default BlogCard;