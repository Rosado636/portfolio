"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; success: boolean } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setToast(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setToast({ message: "Message sent successfully ✅", success: true });
        setForm({ name: "", email: "", message: "" });
      } else {
        setToast({ message: "Something went wrong ❌", success: false });
      }
    } catch (err) {
      console.error(err);
      setToast({ message: "Error sending message ❌", success: false });
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-6 text-white">
      <motion.section
        className="bg-black/60 p-10 rounded-lg max-w-2xl w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-center">Contact Me</h1>
        <p className="text-zinc-400 text-center mb-8">
          Interested in working together or just want to say hi? Fill out the form below and I'll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm mb-1 text-zinc-300">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm mb-1 text-zinc-300">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm mb-1 text-zinc-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full px-6 py-3 rounded font-semibold transition ${
              loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Toast message */}
        {toast && (
          <div
            className={`mt-6 text-center px-4 py-2 rounded ${
              toast.success ? "bg-green-700 text-green-100" : "bg-red-700 text-red-100"
            }`}
          >
            {toast.message}
          </div>
        )}
      </motion.section>
    </main>
  );
}
