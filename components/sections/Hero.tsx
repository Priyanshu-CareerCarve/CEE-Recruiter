"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Box from "@mui/material/Box";
import { MoveRight } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-24 pb-0 px-10">
      <Box className="section-container">
        <Box className="grid lg:grid-cols-2 items-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className=" flex justify-start items-start">
              <Box
                component="img"
                // mx={{ md: 1, xs: 0 }}
                // mt={{ xs: 10, md: 0 }}
                sx={{
                  width: "128px", // You can also use % or responsive values
                  height: "auto",
                }}
                alt="The house from the offer."
                src="https://ccicons.s3.amazonaws.com/mba_hires/landing_page/hero.png"
              />
              <Box
                component="img"
                // display={{ md: "none", xs: "flex" }}
                sx={{
                  width: "5%" /* you can use % */,
                  height: "auto",
                }}
                alt="The house from the offer."
                src="https://ccicons.s3.amazonaws.com/mba_hires/landing_page/three_strokes.svg"
              />
            </div>
            <h1 className="text-[32px] my-2 font-extralight text-gray-600">
              Empower Your Hiring Process with{" "}
            </h1>
            <h1 className=" text-4xl text-backgroundColor">
              CareerCarve Employability
            </h1>
            <p className=" text-gray-600 mb-8 flex justify-start items-center">
              <span className="text-4xl text-backgroundColor mr-4">
                Examination
              </span>
              <span className=" border-2 border-gray-300 rounded p-0.5">
                {" "}
                #Precise
              </span>
              <span className=" border-2 border-gray-300 rounded p-0.5 mx-2">
                {" "}
                #Quick
              </span>
              <span className=" border-2 border-gray-300 rounded p-0.5">
                {" "}
                #Effortless
              </span>
            </p>
            {/* <p className=" border border-black rounded p-4"> #Precise</p> */}
            <Button className="gap-2 bg-primary1 text-white w-72 hover:bg-primary1">
              Get Started <MoveRight size={15} color="white" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px]"
          >
            <Image
              src="/hero-image.jpg"
              alt="Professional woman pointing at analytics"
              fill
              className="object-fill rounded-lg"
              priority
            />
          </motion.div>
        </Box>

        {/* <Box className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold text-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </Box> */}
      </Box>
    </section>
  );
}

const stats = [
  { value: "2,00,000+", label: "Tests Conducted" },
  { value: "60,000+", label: "Students Assessed" },
  { value: "50+", label: "Recruiters Assessed" },
  { value: "40+", label: "Top Colleges" },
];