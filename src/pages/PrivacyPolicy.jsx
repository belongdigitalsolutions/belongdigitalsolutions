import React from "react";
import { Helmet } from "react-helmet-async";
import { buildCanonical } from "../utils/seo";

const PrivacyPolicy = () => (
  <div>
    <Helmet>
      <title>Privacy Policy | BelongDigitalSolutions</title>
      <meta name="description" content="Read the privacy policy for BelongDigitalSolutions." />
      <link rel="canonical" href={buildCanonical("/privacy-policy")} />
    </Helmet>

    <section className="section-padding bg-white">
      <h1 className="font-display text-4xl font-semibold">Privacy Policy</h1>
      <div className="mt-8 space-y-6 text-sm text-neutral-600">
        <p>
          BelongDigitalSolutions respects your privacy and is committed to protecting the personal
          information you share with us. This Privacy Policy explains how we collect, use, and safeguard
          your data when you visit our website or engage with our services.
        </p>

        <div>
          <h2 className="font-display text-xl font-semibold text-secondary">Information We Collect</h2>
          <ul className="mt-3 space-y-2">
            <li>• Contact details such as name, email, phone, and company information.</li>
            <li>• Project details shared through quote, career, or contact forms.</li>
            <li>• Usage data including pages visited and interaction patterns.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-secondary">How We Use Information</h2>
          <ul className="mt-3 space-y-2">
            <li>• Provide and improve our services.</li>
            <li>• Respond to inquiries and deliver proposals.</li>
            <li>• Maintain internal records and analytics.</li>
            <li>• Comply with legal requirements and protect our rights.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-secondary">Data Storage & Security</h2>
          <p className="mt-3">
            We store your data securely using Firebase infrastructure with encryption and access controls.
            We apply industry-standard safeguards and limit access to authorized personnel only.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-secondary">Your Rights</h2>
          <p className="mt-3">
            You may request access, correction, or deletion of your personal data by contacting us at
            belongdigitalsolutions@belongdigitalsolutions.com.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-secondary">Third-Party Services</h2>
          <p className="mt-3">
            We use trusted third-party services such as analytics and hosting providers. These services
            are governed by their own privacy policies.
          </p>
        </div>

        <div>
          <h2 className="font-display text-xl font-semibold text-secondary">Contact</h2>
          <p className="mt-3">
            For privacy questions, email us at belongdigitalsolutions@belongdigitalsolutions.com.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default PrivacyPolicy;
