"use client";

import { useId, useState } from "react";

export default function WaitlistForm({ inverted = false }: { inverted?: boolean }) {
  const id = useId();
  const [joined, setJoined] = useState(false);

  if (joined) {
    return (
      <p
        role="status"
        className={`rounded-full px-5 py-3 text-sm font-medium ${
          inverted ? "bg-white/15 text-white" : "bg-tafel-50 text-tafel-600 dark:bg-tafel-500/15 dark:text-tafel-400"
        }`}
      >
        You&apos;re on the list. We&apos;ll save you a seat at the table.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setJoined(true);
      }}
      className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
    >
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <input
        id={id}
        type="email"
        required
        placeholder="you@example.com"
        className={`h-12 flex-1 rounded-full border px-5 text-sm outline-none transition focus:ring-4 ${
          inverted
            ? "border-white/30 bg-white/10 text-white placeholder:text-white/60 focus:ring-white/20"
            : "border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-tafel-400 focus:ring-tafel-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:ring-tafel-500/20"
        }`}
      />
      <button
        type="submit"
        className={`h-12 rounded-full px-6 text-sm font-semibold transition ${
          inverted
            ? "bg-white text-tafel-600 hover:bg-tafel-50"
            : "bg-tafel-500 text-white hover:bg-tafel-600"
        }`}
      >
        Join the waitlist
      </button>
    </form>
  );
}
