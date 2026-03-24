import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";
import { buildCanonical } from "../utils/seo";

const Services = () => (
  <div>
    <Helmet>
      <title>Services | BelongDigitalSolutions</title>
      <meta name="description" content="Explore full-service digital marketing solutions from BelongDigitalSolutions." />
      <link rel="canonical" href={buildCanonical("/services")} />
    </Helmet>

    <section className="section-padding mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="badge">Services</span>
        <h1 className="mt-4 font-display text-4xl font-semibold">Marketing services built for growth</h1>
        <p className="mt-4 max-w-3xl text-neutral-600">
          From strategic planning to full-scale execution, our service stack is designed to grow brand
          authority and revenue.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  </div>
);

export default Services;