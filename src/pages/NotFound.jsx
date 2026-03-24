import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="section-padding bg-white text-center">
    <h1 className="font-display text-4xl font-semibold">Page not found</h1>
    <p className="mt-3 text-neutral-600">The page you’re looking for doesn’t exist.</p>
    <Link to="/" className="btn-primary mt-6 inline-flex">
      Back to Home
    </Link>
  </div>
);

export default NotFound;
