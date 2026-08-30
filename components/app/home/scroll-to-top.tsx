"use client";

import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="h-12 w-12 border border-foreground rounded-full flex items-center justify-center transition-colors shadow-sm hover:bg-muted/20 cursor-pointer"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}