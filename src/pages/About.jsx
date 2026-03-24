import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import AnimatedCounter from "../components/AnimatedCounter";
import { services } from "../data/services";
import { stats } from "../data/stats";
import { buildCanonical } from "../utils/seo";

const About = () => (
  <div>
    <Helmet>
      <title>About Us | BelongDigitalSolutions</title>
      <meta
        name="description"
        content="BelongDigitalSolutions is a premium digital marketing agency combining strategy, creative, and performance for scalable growth."
      />
      <link rel="canonical" href={buildCanonical("/about")} />
    </Helmet>

    <section className="section-padding mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="badge">About BelongDigitalSolutions</span>
        <h1 className="mt-4 font-display text-4xl font-semibold">A modern agency built for momentum.</h1>
        <p className="mt-4 max-w-3xl text-neutral-600">
          We are a digital marketing partner for ambitious brands. Our team blends strategy, creative
          direction, performance media, and content production to deliver growth that feels premium and
          sustainable.
        </p>
      </motion.div>
    </section>

    <section className="section-padding bg-fog">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
        {[
          {
            title: "Mission",
            text: "Empower brands to become category leaders through modern marketing systems."
          },
          {
            title: "Vision",
            text: "To build the most trusted growth partner for future-ready companies."
          },
          {
            title: "Our Story",
            text: "Born from a passion for creative excellence and data-driven growth, we deliver campaigns that people remember and convert."
          }
        ].map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm"
          >
            <h3 className="font-display text-xl font-semibold text-secondary">{item.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="section-padding mx-auto max-w-6xl">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm">
            <AnimatedCounter value={stat.value} suffix={stat.label === "Avg. ROI" ? "x" : "+"} />
            <p className="mt-2 text-sm text-neutral-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="section-padding bg-white">
      <div className="mx-auto max-w-6xl">
        <span className="badge">Services Offered By Us</span>
        <h2 className="mt-4 font-display text-3xl font-semibold">Services Offered By Us</h2>
        <p className="mt-3 text-neutral-600">
          From strategy to execution, our full stack covers every growth lever your brand needs.
        </p>
      </div>
      <div className="mt-8 ticker">
        <div className="ticker-track py-5 px-6">
          {[...services, ...services].map((service, index) => (
            <span key={`${service.slug}-${index}`} className="ticker-item">
              {service.title}
            </span>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding mx-auto max-w-6xl">
      <div className="rounded-3xl border border-neutral-100 bg-white p-8 shadow-soft">
        <h2 className="font-display text-3xl font-semibold">Why choose us</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            "Senior-level strategists on every account",
            "Creative systems designed for conversion",
            "Transparent reporting and growth insights",
            "Agile execution with weekly optimization"
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-neutral-100 bg-fog p-4 text-sm text-neutral-600">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
