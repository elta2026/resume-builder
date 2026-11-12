"use client";

import { useState } from "react";
import { BookmarkIcon, ChatIcon, HeartIcon, SendIcon } from "./icons";

export default function PostActions({ likes }: { likes: number }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const count = likes + (liked ? 1 : 0);

  return (
    <div className="px-3 pt-2.5">
      <div className="flex items-center gap-3.5">
        <button
          type="button"
          aria-pressed={liked}
          aria-label={liked ? "Unlike" : "Like"}
          onClick={() => setLiked(!liked)}
          className="transition-transform active:scale-90"
        >
          <HeartIcon
            filled={liked}
            className={`size-6 transition-colors ${liked ? "text-tawizy-500" : ""}`}
          />
        </button>
        <ChatIcon className="size-6" />
        <SendIcon className="size-6" />
        <button
          type="button"
          aria-pressed={saved}
          aria-label={saved ? "Remove from saved" : "Save"}
          onClick={() => setSaved(!saved)}
          className="ml-auto transition-transform active:scale-90"
        >
          <BookmarkIcon className={`size-6 ${saved ? "fill-current" : ""}`} />
        </button>
      </div>
      <p className="mt-2 text-[13px] font-semibold">
        {count.toLocaleString("en-US")} likes
      </p>
    </div>
  );
}
