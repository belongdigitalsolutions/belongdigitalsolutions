import React from "react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/forms/ContactForm";
import { buildCanonical } from "../utils/seo";

const Contact = () => (
  <div>
    <Helmet>
      <title>Contact | BelongDigitalSolutions</title>
      <meta name="description" content="Contact BelongDigitalSolutions to start your next marketing project." />
      <link rel="canonical" href={buildCanonical("/contact")} />
    </Helmet>

    <section className="section-padding mx-auto max-w-6xl">
      <span className="badge">Contact</span>
      <h1 className="mt-4 font-display text-4xl font-semibold">Let’s talk about your next launch</h1>
      <p className="mt-4 max-w-2xl text-neutral-600">
        Share your goals and we’ll craft a tailored strategy to get you results.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-soft">
          <h3 className="font-display text-2xl font-semibold">Contact Information</h3>
          <p className="mt-3 text-sm text-neutral-600">Address: House no. 156, Street no. 9, Guru Nanak Nagar, Patiala, 147003, Bharat</p>
          <p className="mt-2 text-sm text-neutral-600">Phone: +91 9646082133</p>
          <p className="mt-2 text-sm text-neutral-600">
            Email: belongdigitalsolutions@belongdigitalsolutions.com
          </p>
          <div className="mt-6 h-56 rounded-2xl bg-fog">
            <div className="flex h-full items-center justify-center text-sm text-neutral-400">
              Google Map Placeholder
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  </div>
);

export default Contact;
