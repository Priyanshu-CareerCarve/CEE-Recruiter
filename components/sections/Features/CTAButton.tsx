"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight } from "lucide-react";

export function CTAButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Button className="gap-2 bg-primary1 text-white w-80 hover:bg-primary1">
        Get Started <MoveRight size={15} color="white" />
      </Button>
    </motion.div>
  );
}
