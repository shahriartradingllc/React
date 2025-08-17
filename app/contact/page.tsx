"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    const form = new FormData(e.target);
    const res = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        message: form.get("message")
      })
    });

    if (res.ok) setStatus("✅ Message sent successfully!");
    else setStatus("❌ Failed to send message.");
  }

  return (
    <div className="max-w-2xl mx-auto py-16">
      <h2 className="text-3xl font-bold text-neonGreen mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 rounded bg-gray-900" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 rounded bg-gray-900" />
        <textarea name="message" placeholder="Your Message" required className="w-full p-3 rounded bg-gray-900"></textarea>
        <button type="submit" className="bg-neonBlue text-black px-6 py-3 rounded-xl">Send</button>
      </form>
      <p className="mt-4">{status}</p>
    </div>
  );
}
