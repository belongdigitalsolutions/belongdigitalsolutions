import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { services, serviceSteps } from "../data/services";
import { buildCanonical } from "../utils/seo";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="section-padding mx-auto max-w-6xl">
        <h1 className="font-display text-3xl font-semibold">Service not found</h1>
        <Link to="/services" className="btn-secondary mt-4 inline-flex">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>{service.title} | BelongDigitalSolutions</title>
        <meta name="description" content={service.short} />
        <link rel="canonical" href={buildCanonical(`/services/${service.slug}`)} />
      </Helmet>

      <section className="section-padding bg-secondary text-white">
        <div className="mx-auto max-w-6xl">
          <span className="badge">Service</span>
          <h1 className="mt-4 font-display text-4xl font-semibold">{service.title}</h1>
          <p className="mt-3 text-neutral-300">{service.hero}</p>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-semibold">Service Overview</h2>
          <p className="mt-4 text-neutral-600">{service.overview}</p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm">
            <h3 className="font-display text-xl font-semibold">Benefits</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
              {service.benefits.map((benefit) => (
                <li key={benefit}>• {benefit}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm">
            <h3 className="font-display text-xl font-semibold">Process / Workflow</h3>
            <ol className="mt-4 space-y-3 text-sm text-neutral-600">
              {service.process.map((step, index) => (
                <li key={step}>
                  {index + 1}. {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-neutral-100 bg-fog p-6">
          <h3 className="font-display text-xl font-semibold">How we make your company a reputed brand</h3>
          <ol className="mt-4 space-y-3 text-sm text-neutral-600">
            {serviceSteps.map((step, index) => (
              <li key={step}>
                {index + 1}. {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-secondary p-6 text-white">
          <div>
            <h4 className="font-display text-2xl font-semibold">Ready to start this service?</h4>
            <p className="mt-2 text-sm text-neutral-300">Book a strategy session and we’ll craft your roadmap.</p>
          </div>
          <Link to="/contact" className="btn-primary">
            Start Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;