"use client";

import { motion } from "framer-motion";

export function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <h2 className="text-[64px] font-medium text-gray-600 leading-tight tracking-tight">
        CEE
        <div className="text-[32px] mt-2 text-gray-600">
          A <span className="text-[#1c8ea8]">360-Degree</span>
          <br />
          Assessment
        </div>
      </h2>
      <p className="text-lg text-gray-400 font-light">
        Eliminate Role Misfits, Hire with Confidence.
      </p>
    </motion.div>
  );
}
