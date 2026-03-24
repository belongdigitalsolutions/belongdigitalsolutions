import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Modal from "./Modal";
import QuoteForm from "./forms/QuoteForm";
import logo from "../assets/logo.svg";

const links = [
  { label: "Home", to: "/", end: true },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy-policy" }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition ${
        scrolled ? "bg-white shadow-lg nav-shadow" : "bg-white"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="BelongDigitalSolutions" className="h-10 w-10" />
          <div>
            <p className="font-display text-lg font-semibold leading-tight text-secondary">
              BelongDigitalSolutions
            </p>
            <p className="text-xs uppercase tracking-[0.28em] text-neutral-400">Digital Growth</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-accent ${
                  isActive ? "text-accent" : "text-secondary"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary"
            onClick={() => setQuoteOpen(true)}
          >
            Get Quote
          </motion.button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-secondary lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="text-lg">☰</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-neutral-100 bg-white px-6 pb-6 lg:hidden">
          <div className="flex flex-col gap-3 pt-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium transition hover:text-accent ${
                    isActive ? "text-accent" : "text-secondary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary mt-3 w-full"
              onClick={() => {
                setQuoteOpen(true);
                setOpen(false);
              }}
            >
              Get Quote
            </motion.button>
          </div>
        </div>
      )}

      <Modal open={quoteOpen} onClose={() => setQuoteOpen(false)} title="Get a Custom Quote">
        <QuoteForm onSubmitted={() => setQuoteOpen(false)} />
      </Modal>
    </header>
  );
};

export default Navbar;
