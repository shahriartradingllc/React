"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-neonGreen drop-shadow-lg"
      >
        Shahriyar Trading LLC
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-xl text-neonBlue"
      >
        Forex & Crypto Trading Solutions
      </motion.p>
      <motion.a
        href="/projects"
        whileHover={{ scale: 1.1 }}
        className="mt-8 px-6 py-3 rounded-2xl bg-neonGreen text-black font-semibold shadow-lg"
      >
        View Projects
      </motion.a>
    </section>
  );
}
