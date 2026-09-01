"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })}
          initial={reduced ? false : { opacity: 0, y: 14, scale: 0.88 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduced ? undefined : { opacity: 0, y: 10, scale: 0.9 }}
          className="fixed bottom-4 right-4 z-40 grid h-11 w-11 place-items-center rounded-full border border-accent/35 bg-surface/90 text-accent shadow-glow backdrop-blur-xl transition-colors hover:bg-accent hover:text-[#06110c] sm:bottom-6 sm:right-6"
        >
          <ArrowUp aria-hidden className="h-4 w-4" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
