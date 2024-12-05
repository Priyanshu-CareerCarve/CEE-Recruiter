"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  Users,
  FileCheck,
  MoveRight,
  BriefcaseBusiness,
  CircleCheck,
  UserCheck,
} from "lucide-react";

const steps = [
  {
    icon: 1,
    title: "Post a Job",
    description: "Post your job requirements on the CEE platform.",
    iconsss: <BriefcaseBusiness />,
  },
  {
    icon: 2,
    title: "Interview Top Candidates",
    description: "Skip to interviewing top profiles shortlisted by CEE.",
    iconsss: <CircleCheck />,
  },
  {
    icon: 3,
    title: "Roll Out Offers",
    description: "Make hiring decisions on fittest of the lot.",
    iconsss: <UserCheck />,
  },
];

export function Process() {
  return (
    <section className="py-8 bg-white px-10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl  text-gray-600 mb-1">
            The <span className=" text-primary1"> CEE Process</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-medium">
            No resume shortlisting dilemma any more.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-6 rounded-lg text-center border border-gray-200"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-orange rounded-full">
                <h1 className="text-3xl text-backgroundColor">{step.icon}</h1>
              </div>
              <div className=" flex justify-center items-center gap-2">
                <h3 className="text-xl mb-3 font-medium"> {step.iconsss}</h3>
                <h3 className="text-xl mb-3 font-medium">{step.title}</h3>
              </div>
              <p className=" text-gray-400 font-light text-[17px]">
                {step.description}
              </p>
              {/* {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                </div>
              )} */}
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
          <Button className="gap-2 bg-primary1 text-white w-72 hover:bg-primary1">
            Get Started <MoveRight size={15} color="white" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
