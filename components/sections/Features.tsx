"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Calculator,
  Lightbulb,
  Users,
  Shield,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Brain,
    title: "Virtual Ability",
    description: "Assess cognitive skills and problem-solving capabilities",
  },
  {
    icon: Calculator,
    title: "Quantitative Ability",
    description: "Evaluate numerical and analytical proficiency",
  },
  {
    icon: Lightbulb,
    title: "Logical Ability",
    description: "Measure reasoning and critical thinking skills",
  },
  {
    icon: Users,
    title: "Talent Acquisition",
    description: "Streamline your recruitment process",
  },
  {
    icon: Shield,
    title: "Risk Preparedness",
    description: "Evaluate decision-making under pressure",
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Get detailed insights and reports",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50 px-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            CEE: A 360-Degree Assessment
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Eliminate Bias. Simplify Hiring with Confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-primary1 hover:bg-primary1 text-[16px]"
          >
            Get Started Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
