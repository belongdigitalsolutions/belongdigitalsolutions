import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm transition hover:border-accent hover:shadow-soft"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 text-accent">
        <Icon />
      </div>
      <h3 className="mt-4 font-display text-xl font-semibold text-secondary">{service.title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{service.short}</p>
      <Link
        to={`/services/${service.slug}`}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent"
      >
        Learn More
        <span className="transition group-hover:translate-x-1">→</span>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
