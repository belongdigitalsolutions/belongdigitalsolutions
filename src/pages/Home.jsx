import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import BlogCard from "../components/BlogCard";
import ContactForm from "../components/forms/ContactForm";
import { services } from "../data/services";
import { blogs } from "../data/blogs";
import { buildCanonical, defaultMeta, baseUrl } from "../utils/seo";

const Home = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BelongDigitalSolutions",
    url: baseUrl
  };

  return (
    <div>
      <Helmet>
        <title>{defaultMeta.title}</title>
        <meta name="description" content={defaultMeta.description} />
        <link rel="canonical" href={buildCanonical("/")} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <Hero />

      <section className="section-padding bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-2"
        >
          <div>
            <span className="badge">About Us</span>
            <h2 className="mt-4 font-display text-3xl font-semibold">
              Strategy-first growth that feels human.
            </h2>
            <p className="mt-4 text-neutral-600">
              We are a full-stack digital marketing partner blending brand strategy, creative production,
              and performance media. Our team builds systems that scale demand and deepen customer trust.
            </p>
            <Link to="/about" className="btn-secondary mt-6 inline-flex">
              Learn More
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-neutral-100 bg-white p-6 shadow-soft">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,0,0,0.06),transparent_45%),radial-gradient(circle_at_85%_15%,rgba(0,0,0,0.04),transparent_40%)]" />
            <div className="pointer-events-none absolute -bottom-12 -left-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.9),rgba(0,0,0,0.06))] blur-2xl" />
            <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-400">Why Us</p>
            <ul className="mt-4 space-y-3 text-sm text-neutral-600">
              <li>• Growth plans tailored to your industry and stage.</li>
              <li>• Premium creative with conversion-focused execution.</li>
              <li>• Transparent reporting with actionable next steps.</li>
              <li>• Dedicated success managers and rapid iteration.</li>
            </ul>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="badge">Services</span>
              <h2 className="mt-4 font-display text-3xl font-semibold">Our Growth Services</h2>
              <p className="mt-2 text-neutral-600">
                End-to-end marketing services that make your brand a category leader.
              </p>
            </div>
            <Link to="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "Conversion-First Strategy",
              text: "Every campaign is designed to move audiences from attention to action.",
              value: "+42%"
            },
            {
              title: "Premium Brand Storytelling",
              text: "We build iconic visuals and messaging that increases trust and demand.",
              value: "98%"
            },
            {
              title: "Performance Transparency",
              text: "Data dashboards and weekly insights keep your team ahead of growth KPIs.",
              value: "24/7"
            }
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm"
            >
              <p className="text-3xl font-display font-semibold text-accent">{item.value}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-secondary">{item.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-display text-3xl font-semibold">Ready to build your next growth chapter?</h2>
          <p className="mt-3 text-neutral-600">
            Work with a team that treats your brand like their own. Let's craft a growth roadmap built for
            scale.
          </p>
          <Link to="/contact" className="btn-primary mt-6 inline-flex">
            Book a Strategy Call
          </Link>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="badge">Latest Blogs</span>
            <h2 className="mt-4 font-display text-3xl font-semibold">Insights & Growth Playbooks</h2>
          </div>
          <Link to="/blog" className="btn-secondary">
            Read More
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="badge">Contact</span>
            <h2 className="mt-4 font-display text-3xl font-semibold">Let’s build your next campaign</h2>
            <p className="mt-3 text-neutral-600">
              Tell us about your goals and we’ll respond within 24 hours with a tailored strategy outline.
            </p>
            <div className="mt-6 rounded-3xl bg-white p-6 shadow-soft">
              <p className="text-sm text-neutral-600">
                Email: belongdigitalsolutions@belongdigitalsolutions.com
              </p>
              <p className="mt-2 text-sm text-neutral-600">Phone: +91 9646082133</p>
              <p className="mt-2 text-sm text-neutral-600">Address: House no. 156, Street no. 9, Guru Nanak Nagar, Patiala, 147003, Bharat</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
