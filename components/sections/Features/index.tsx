"use client";

import { motion } from "framer-motion";
import { FeatureGrid } from "./FeatureGrid";
import { SectionHeader } from "./SectionHeader";
import { CTAButton } from "./CTAButton";

export function Features() {
  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-7/12"
          >
            <FeatureGrid />
          </motion.div>

          <div className="w-full lg:w-4/12 lg:sticky lg:top-24 space-y-8 pt-4">
            <SectionHeader />
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
}
