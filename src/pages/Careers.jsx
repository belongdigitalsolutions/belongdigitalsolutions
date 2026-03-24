import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import CareerForm from "../components/forms/CareerForm";
import { buildCanonical } from "../utils/seo";

const Careers = () => (
  <div>
    <Helmet>
      <title>Careers | BelongDigitalSolutions</title>
      <meta name="description" content="Join the BelongDigitalSolutions team and build standout marketing campaigns." />
      <link rel="canonical" href={buildCanonical("/careers")} />
    </Helmet>

    <section className="section-padding mx-auto max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="badge">Careers</span>
        <h1 className="mt-4 font-display text-4xl font-semibold">Build your career in growth marketing</h1>
        <p className="mt-4 max-w-3xl text-neutral-600">
          Join a team of strategists, creatives, and performance marketers who thrive on impact. We
          believe in ownership, learning, and work that makes brands feel premium.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm">
          <h3 className="font-display text-2xl font-semibold">Company Culture</h3>
          <ul className="mt-4 space-y-3 text-sm text-neutral-600">
            <li>• Strategy-first thinking with creative excellence.</li>
            <li>• Collaborative teams that move fast without sacrificing quality.</li>
            <li>• Transparent growth plans and leadership mentorship.</li>
            <li>• A culture of ownership and experimentation.</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm">
          <h3 className="font-display text-2xl font-semibold">Benefits</h3>
          <ul className="mt-4 space-y-3 text-sm text-neutral-600">
            <li>• Competitive compensation with performance bonuses.</li>
            <li>• Flexible work arrangements.</li>
            <li>• Learning budget for courses and certifications.</li>
            <li>• Health and wellness support.</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl bg-secondary p-8 text-white">
          <h3 className="font-display text-3xl font-semibold">Apply to Join Us</h3>
          <p className="mt-3 text-neutral-300">
            Tell us about yourself and share your experience. We’re excited to learn about you.
          </p>
        </div>
        <CareerForm />
      </div>
    </section>
  </div>
);

export default Careers;