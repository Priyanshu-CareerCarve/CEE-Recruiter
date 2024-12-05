"use client";

import { motion } from "framer-motion";
import { Feature } from "./Feature";
import { features } from "./features.data";

export function FeatureGrid() {
  return (
    <div
      className="w-full relative bg-[url('/vector.svg')]"
      style={{
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative grid grid-cols-3 gap-8 p-8">
        {features.map((feature, index) => (
          <motion.div
            key={`${feature.title}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Feature {...feature} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
