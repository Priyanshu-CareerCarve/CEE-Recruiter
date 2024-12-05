"use client";

import { motion } from "framer-motion";
import { Clock, Users, LineChart, TrendingDown, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Clock,
    title: "Save Time and Effort",
    description:
      "Streamline your hiring process and reduce time-to-hire significantly",
  },
  {
    icon: Users,
    title: "Access Top Talent",
    description: "Connect with pre-screened, qualified candidates instantly",
  },
  {
    icon: LineChart,
    title: "Data-Driven Insights",
    description:
      "Make informed decisions with comprehensive assessment analytics",
  },
  {
    icon: TrendingDown,
    title: "Reduce Attrition",
    description: "Ensure better candidate-role fit for long-term retention",
  },
];

export function WhyCEE() {
  return (
    <section className="py-20 px-10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-1">
            Why <span className=" text-primary1">CEE</span>?
          </h2>
          <p className="text-lg text-gray-400">
            A data-driven approach to talent acquisition.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg transition-shadow flex flex-col justify-center items-center"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-500 text-[14px] text-center">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button className="gap-2 bg-primary1 text-white w-72 hover:bg-primary1">
            Get Started <MoveRight size={15} color="white" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
