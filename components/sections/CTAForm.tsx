"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function CTAForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mobile: "",
    email: "",
    website: "",
    RecruitmentType: "",
    role: "",
    queries: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-12 md:py-20 bg-primary1 text-white">
      <div className="container px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left side content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/4 text-center md:text-right"
          >
            <h2 className="text-2xl md:text-[32px] font-light md:mb-8 text-[#FBC983]">
              Join the
            </h2>
            <h2 className="text-4xl md:text-[64px] font-medium md:mb-8 text-[#FBC983]">
              CEE
            </h2>
            <h2 className="text-2xl md:text-[32px] font-light md:mb-12 text-[#FBC983]">
              Revolution
            </h2>
            <p className="text-base md:text-[18px] text-white opacity-90 font-thin">
              Submit the form and we&apos;ll
            </p>
            <p className="text-base md:text-[18px] text-white opacity-90 font-thin">
              revert back shortly.
            </p>
          </motion.div>

          {/* Divider - Hidden on mobile */}
          <div className="hidden md:block w-px bg-white"></div>

          {/* Form section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white border-white border text-gray-800 placeholder:text-gray-800/60"
                  required
                />
                <Input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-white border-white border text-gray-800 placeholder:text-gray-800/60"
                  required
                />
                <Input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile No."
                  value={formData.mobile}
                  onChange={handleChange}
                  className="bg-white border-white border text-gray-800 placeholder:text-gray-800/60"
                  required
                />
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white border-white border text-gray-800 placeholder:text-gray-800/60"
                  required
                />
                <Input
                  type="url"
                  name="website"
                  placeholder="Company Website URL"
                  value={formData.website}
                  onChange={handleChange}
                  className="bg-white border-white border text-gray-800 placeholder:text-gray-800/60"
                  required
                />
              </div>

              {/* Third Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full bg-white border-white border text-gray-800/60 rounded-md px-3 h-10"
                  required
                >
                  <option value="" disabled>
                    Role
                  </option>
                  <option value="interns">Interns</option>
                  <option value="employees">Full-time Employees</option>
                  <option value="both">Both</option>
                </select>
                <select
                  name="lookingFor"
                  value={formData.RecruitmentType}
                  onChange={handleChange}
                  className="w-full bg-white border-white border text-gray-800/60 rounded-md px-3 h-10"
                  required
                >
                  <option value="" disabled>
                    Recruitment Type
                  </option>
                  <option value="interns">Gig Interns</option>
                  <option value="employees">Full Time Interns</option>
                  <option value="both">Permanent Roles</option>
                </select>
              </div>

              {/* Fourth Row */}
              <div className="space-y-4">
                <Textarea
                  name="queries"
                  placeholder="Ask a Specific Question (if any)"
                  value={formData.queries}
                  onChange={handleChange}
                  className="bg-white border-white border text-gray-800 placeholder:text-gray-800/60"
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-center mt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-fit px-8 py-4 bg-backgroundColor text-white text-lg md:text-[20px] hover:bg-backgroundColor/90"
                >
                  Submit
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
