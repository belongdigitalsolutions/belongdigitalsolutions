import React, { useState } from "react";
import toast from "react-hot-toast";
import { submitQuote } from "../../services/dataService";
import { useRateLimit } from "../../hooks/useRateLimit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  description: ""
};

const QuoteForm = ({ onSubmitted }) => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { canSubmit } = useRateLimit(3, 60 * 1000);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!canSubmit()) {
      toast.error("Please wait a minute before submitting again.");
      return;
    }

    if (!form.name || !form.email || !form.phone || !form.service) {
      toast.error("Please complete all required fields.");
      return;
    }

    try {
      setLoading(true);
      await submitQuote(form);
      toast.success("Quote request sent successfully.");
      setForm(initialState);
      if (onSubmitted) onSubmitted();
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="form-field"
          name="name"
          placeholder="Name *"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className="form-field"
          name="email"
          type="email"
          placeholder="Email *"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="form-field"
          name="phone"
          placeholder="Phone *"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          className="form-field"
          name="company"
          placeholder="Company Name"
          value={form.company}
          onChange={handleChange}
        />
      </div>
      <select className="form-field" name="service" value={form.service} onChange={handleChange}>
        <option value="">Service Interested In *</option>
        <option value="Content Creation">Content Creation</option>
        <option value="Targeted Digital Ads">Targeted Digital Ads</option>
        <option value="Influencer Marketing">Influencer Marketing</option>
        <option value="Meme Marketing">Meme Marketing</option>
        <option value="ORM">ORM</option>
        <option value="Market Research & Surveys">Market Research & Surveys</option>
        <option value="Video Editing">Video Editing</option>
        <option value="Multiplatform Management">Multiplatform Management</option>
      </select>
      <textarea
        className="form-field min-h-[120px]"
        name="description"
        placeholder="Project Description"
        value={form.description}
        onChange={handleChange}
      />
      <button type="submit" className="btn-primary w-full" disabled={loading}>
        {loading ? "Sending..." : "Submit Quote Request"}
      </button>
    </form>
  );
};

export default QuoteForm;