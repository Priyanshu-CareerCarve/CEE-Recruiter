"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  Banknote,
} from "lucide-react";
import { useState } from "react";
import { Colors } from "@/lib/Color";

const jobs = [
  {
    id: 1,
    company: "Wells Fargo",
    logo: "https://ccicons.s3.amazonaws.com/mba_hires/companies/wells_fargo.png",
    title: "Digital Marketing Manager",
    location: "Bengaluru",
    salary: "₹15L - 16L per annum",
    type: "Digital Mark",
  },
  {
    id: 2,
    company: "Bosch Consulting",
    logo: "https://ccicons.s3.amazonaws.com/mba_hires/companies/bosch.png",
    title: "Junior Investment Banker Partner",
    location: "Mumbai",
    salary: "₹12L - 14L per annum",
    type: "Finance",
  },
  {
    id: 3,
    company: "Wells Fargo",
    logo: "https://ccicons.s3.amazonaws.com/mba_hires/companies/wells_fargo.png",
    title: "Senior Business Analyst",
    location: "Hyderabad",
    salary: "₹10L - 13L per annum",
    type: "Business",
  },
  // Duplicate jobs to create 3x3 grid
  {
    id: 4,
    company: "Wells Fargo",
    logo: "https://ccicons.s3.amazonaws.com/mba_hires/companies/wells_fargo.png",
    title: "Digital Marketing Manager",
    location: "Bengaluru",
    salary: "₹15L - 16L per annum",
    type: "Digital Mark",
  },
  {
    id: 5,
    company: "Bosch Consulting",
    logo: "https://ccicons.s3.amazonaws.com/mba_hires/companies/bosch.png",
    title: "Junior Investment Banker Partner",
    location: "Mumbai",
    salary: "₹12L - 14L per annum",
    type: "Finance",
  },
  {
    id: 6,
    company: "Wells Fargo",
    logo: "https://ccicons.s3.amazonaws.com/mba_hires/companies/wells_fargo.png",
    title: "Senior Business Analyst",
    location: "Hyderabad",
    salary: "₹10L - 13L per annum",
    type: "Business",
  },
  {
    id: 7,
    company: "Wells Fargo",
    logo: "https://ccicons.s3.amazonaws.com/mba_hires/companies/wells_fargo.png",
    title: "Digital Marketing Manager",
    location: "Bengaluru",
    salary: "₹15L - 16L per annum",
    type: "Digital Mark",
  },
  {
    id: 8,
    company: "Bosch Consulting",
    logo: "https://ccicons.s3.amazonaws.com/mba_hires/companies/bosch.png",
    title: "Junior Investment Banker Partner",
    location: "Mumbai",
    salary: "₹12L - 14L per annum",
    type: "Finance",
  },
  {
    id: 9,
    company: "Wells Fargo",
    logo: "https://ccicons.s3.amazonaws.com/mba_hires/companies/wells_fargo.png",
    title: "Senior Business Analyst",
    location: "Hyderabad",
    salary: "₹10L - 13L per annum",
    type: "Business",
  },
];

export function JobListings() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-20 bg-backgroundJob px-10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-2">
            <span className=" text-primary1">Companies Hiring</span> using CEE
          </h2>
          <p className="text-lg text-gray-400">
            Recruiters believe in data-driven hiring from CEE scores
          </p>
        </motion.div>

        <div className="relative">
          <div className="">
            <div
              className="transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentPage * 100}%)`,
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[95%] mx-auto">
                {jobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white border border-gray-100 rounded-lg p-6 shadow-lg hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative w-14 h-12 flex-shrink-0 shadow-lg rounded-md">
                        <Image
                          src={job.logo}
                          alt={`${job.company} logo`}
                          fill
                          className="object-contain "
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold mb-1 text-gray-600">
                          {job.company}
                        </p>
                        <p className="text-xs text-gray-500">Posting Soon</p>
                      </div>
                      {job.type === "Finance" ? (
                        <span className="inline-block px-2 py-1 text-xs font-medium text-backgroundColor bg-orange rounded-full">
                          {job.type}
                        </span>
                      ) : (
                        <span className="inline-block px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                          {job.type}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg  text-gray-900 mb-12 min-h-[60px]">
                      {job.title} - {job.location}
                    </h3>
                    <div className="flex items-center text-gray-600 text-sm gap-2">
                      <Banknote color={Colors.primary2} />
                      <span>{job.salary}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button> */}
        </div>

        <div className="text-center mt-8 text-backgroundColor">
          <p>and more to follow...</p>
        </div>
      </div>
    </section>
  );
}
