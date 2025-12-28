"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { FormInputIcon } from "lucide-react";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 w-full space-y-4">
      <input
        name="name"
        placeholder="Your Name"
        required
        className="w-full rounded-md border px-4 py-3 text-sm bg-background"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full rounded-md border px-4 py-3 text-sm bg-background"
      />

      <textarea
        name="message"
        rows={5}
        placeholder="Your Message"
        required
        className="w-full rounded-md border px-4 py-3 text-sm bg-background resize-none"
      />

      <div className="text-center text-muted-foreground text-[11px] sm:text-xs">
        Note: Messages are sent securely using a production-ready email service.
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 rounded-md bg-foreground text-background py-3 text-sm font-semibold hover:opacity-90 transition"
      >
        {loading ? "Sending..." : "Send Message"}
      </Button>

      {success && (
        <p className="text-sm text-green-600 text-center">
          Thanks! Your message has been delivered.
        </p>
      )}

      {error && <p className="text-sm text-red-500 text-center">{error}</p>}
    </form>
  );
}
