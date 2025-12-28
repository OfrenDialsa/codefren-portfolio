"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowUpRight, FormInputIcon } from "lucide-react";
import { InputIcon } from "@radix-ui/react-icons";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    if (res.ok) {
      setSuccess(true);
      form.reset();
    }

    setLoading(false);
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

      <Button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 rounded-md bg-foreground text-background py-3 text-sm font-semibold hover:opacity-90 transition"
      >
        {loading ? "Sending..." : "Send Message"}
        <FormInputIcon className="w-4 h-4" />
      </Button>

      {success && (
        <p className="text-sm text-green-600 text-center">
          Message sent successfully!
        </p>
      )}
    </form>
  );
}
