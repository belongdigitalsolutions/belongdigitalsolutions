import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/logo.png";

const Footer = () => (
  <footer className="bg-[#141414] text-white">
    <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <div className="flex items-center gap-3">
          <img src={logo} alt="BelongDigitalSolutions" className="h-10 w-10" />
          <div>
            <p className="font-display text-lg font-semibold">BelongDigitalSolutions</p>
            <p className="text-xs uppercase tracking-[0.28em] text-neutral-300">Digital Marketing</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-neutral-200">
          Premium digital marketing, performance creative, and growth strategy for ambitious brands.
        </p>
        <div className="mt-5 flex items-center gap-3">
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
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-white/40 hover:text-white"
                aria-label={item.label}
                title={item.label}
              >
                <Icon className="text-lg" />
              </a>
            );
          })}
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-neutral-300">Services</p>
        <ul className="mt-4 space-y-2 text-sm text-neutral-200">
          <li>Content Creation</li>
          <li>Targeted Ads</li>
          <li>Influencer Marketing</li>
          <li>Meme Marketing</li>
          <li>ORM</li>
          <li>Market Research</li>
          <li>Video Editing</li>
          <li>Multiplatform Management</li>
        </ul>
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-neutral-300">Company</p>
        <ul className="mt-4 space-y-2 text-sm text-neutral-200">
          <li>
            <Link to="/about" className="hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/careers" className="hover:text-white">
              Careers
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-white">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-neutral-300">Contact</p>
        <ul className="mt-4 space-y-2 text-sm text-neutral-200">
          <li>Address: House no. 156, Street no. 9, Guru Nanak Nagar, Patiala, 147003, Bharat</li>
          <li>Phone: +91 9646082133</li>
          <li className="break-words">
            Email: <span className="block max-w-[220px] sm:max-w-none">belongdigitalsolutions@belongdigitalsolutions.com</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/10 py-6 text-center text-sm text-neutral-300">
      © 2026 BelongDigitalSolutions. All rights reserved.
    </div>
  </footer>
);

export default Footer;
