import React from "react";
import { Helmet } from "react-helmet-async";
import { FaEnvelope, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ContactForm from "../components/forms/ContactForm";
import { buildCanonical } from "../utils/seo";

const Contact = () => (
  <div>
    <Helmet>
      <title>Contact | BelongDigitalSolutions</title>
      <meta name="description" content="Contact BelongDigitalSolutions to start your next marketing project." />
      <link rel="canonical" href={buildCanonical("/contact")} />
    </Helmet>

    <section className="section-padding bg-white">
      <span className="badge">Contact</span>
      <h1 className="mt-4 font-display text-4xl font-semibold">Let’s talk about your next launch</h1>
      <p className="mt-4 max-w-2xl text-neutral-600">
        Share your goals and we’ll craft a tailored strategy to get you results.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-soft">
          <h3 className="font-display text-2xl font-semibold">Contact Information</h3>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100 text-accent">
                <FaMapMarkerAlt />
              </span>
              <div>
                <p className="text-sm font-semibold text-secondary">Address</p>
                <p className="text-sm text-neutral-600">
                  House no. 156, Street no. 9, Guru Nanak Nagar, Patiala, 147003, Bharat
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100 text-accent">
                <FaPhoneAlt />
              </span>
              <div>
                <p className="text-sm font-semibold text-secondary">Phone</p>
                <p className="text-sm text-neutral-600">+91 9646082133</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-100 text-accent">
                <FaEnvelope />
              </span>
              <div>
                <p className="text-sm font-semibold text-secondary">Email</p>
                <p className="text-sm text-neutral-600 break-words">
                  belongdigitalsolutions@belongdigitalsolutions.com
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 h-56 rounded-2xl border border-neutral-200 bg-white">
            <div className="flex h-full items-center justify-center text-sm text-neutral-500">
              Google Map Placeholder
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3">
            {[
              {
                icon: FaYoutube,
                label: "YouTube",
                href: "https://www.youtube.com/channel/UCCJcjqoRvW-G3O4hyoUsNpg"
              },
              {
                icon: FaInstagram,
                label: "Instagram",
                href: "https://www.instagram.com/belongdigitalsolutions/"
              },
              { icon: FaXTwitter, label: "X", href: "https://x.com/BelongDigitalS" },
              {
                icon: FaLinkedin,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/belong-digital-solutions-6199273b9/"
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-secondary transition hover:border-accent hover:text-accent"
                  aria-label={item.label}
                  title={item.label}
                >
                  <Icon className="text-lg" />
                </a>
              );
            })}
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  </div>
);

export default Contact;
