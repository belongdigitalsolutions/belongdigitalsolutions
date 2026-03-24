import React, { useState } from "react";
import toast from "react-hot-toast";
import { submitCareer } from "../../services/dataService";
import { useRateLimit } from "../../hooks/useRateLimit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

const CareerForm = () => {
  const [form, setForm] = useState(initialState);
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const { canSubmit } = useRateLimit(2, 60 * 1000);

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

    if (!form.name || !form.email || !form.message) {
      toast.error("Please complete all required fields.");
      return;
    }

    try {
      setLoading(true);
      await submitCareer(form, resume);
      toast.success("Application received. We'll reach out soon.");
      setForm(initialState);
      setResume(null);
    } catch {
      toast.error("Unable to submit. Please try again.");
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
      <input
        className="form-field"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />
      <input
        className="form-field"
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(event) => setResume(event.target.files[0])}
      />
      <textarea
        className="form-field min-h-[120px]"
        name="message"
        placeholder="Message *"
        value={form.message}
        onChange={handleChange}
      />
      <button type="submit" className="btn-primary w-full" disabled={loading}>
        {loading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
};

export default CareerForm;