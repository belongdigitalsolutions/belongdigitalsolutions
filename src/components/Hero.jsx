import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Modal from "./Modal";
import QuoteForm from "./forms/QuoteForm";
import heroImage from "../assets/hero-illustration.svg";
import heroBg from "../assets/hero-bg-img.jpg";
import logo from "../assets/logo.png";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 120]);

  return (
    <section className="relative overflow-hidden hero-grid">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-white/35" />

      <div className="section-padding relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 text-center lg:flex-row lg:text-left">
        <div className="flex-1">
          <span className="badge">Premium Marketing Agency</span>
          <h1 className="mt-6 font-display text-4xl font-bold text-secondary md:text-5xl">
            Build a brand people <span className="text-gradient">belong</span> to.
          </h1>
          <p className="mt-4 max-w-xl text-base text-neutral-600 md:text-lg">
            BelongDigitalSolutions blends creativity, performance, and brand strategy to grow modern
            businesses. We craft campaigns that feel premium and convert.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link to="/services" className="btn-secondary">
              Explore Services
            </Link>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
              onClick={() => setOpen(true)}
            >
              Start a Project
            </motion.button>
          </div>
        </div>

        <div className="flex-1">
          <motion.div style={{ y }} className="relative">
            <div className="absolute -left-10 -top-8 hidden h-24 w-24 rounded-3xl bg-white/70 lg:block" />
            <div className="absolute -right-6 -bottom-6 hidden h-16 w-16 rounded-full bg-white/80 lg:block" />
            <div className="relative overflow-hidden rounded-[32px] bg-secondary/95 p-6 shadow-soft">
              <img src={logo} alt="BelongDigitalSolutions" className="h-12 w-12" />
              <h3 className="mt-4 font-display text-2xl text-white">Growth Engine</h3>
              <p className="mt-2 text-sm text-neutral-300">
                Strategy, content, and performance united under one premium growth system.
              </p>
              <img
                src={heroImage}
                alt="Marketing dashboard"
                className="mt-6 w-full rounded-2xl border border-white/10"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,0,0,0.06),transparent_55%)]" />

      <Modal open={open} onClose={() => setOpen(false)} title="Start Your Project">
        <QuoteForm onSubmitted={() => setOpen(false)} />
      </Modal>
    </section>
  );
};

export default Hero;
