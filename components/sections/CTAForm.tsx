"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { useState } from "react";
import { Colors } from "@/lib/Color";

export function CTAForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mobile: "",
    email: "",
    website: "",
    lookingFor: "",
    role: "",
    queries: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
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
    <section className={`py-20  bg-primary1 text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          {/* Left side content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-1/4 flex flex-col justify-start"
          >
            <h2 className="text-[32px] text-right font-light text-[#FBC983]">
              Join the
            </h2>
            <h2 className="text-[64px] text-right font-medium text-[#FBC983]">
              CEE
            </h2>
            <h2 className="text-[32px] text-right font-light mb-3 text-[#FBC983]">
              Revolution
            </h2>
            <p className="text-[18px] text-right text-white opacity-90 font-thin">
              Submit the form and we&apos;ll
            </p>
            <p className="text-[18px] text-right text-white opacity-90 font-thin">
              revert back shortly.
            </p>
          </motion.div>

          {/* Divider */}
          <div className="w-px bg-white"></div>

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
              <div className="grid grid-cols-3 gap-8">
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
              <div className="grid grid-cols-2 gap-8">
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
              <div className="grid grid-cols-2 gap-8">
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full bg-white border-white border text-gray-800/60 rounded-md px-2 h-10"
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
                  value={formData.lookingFor}
                  onChange={handleChange}
                  className="w-full bg-white border-white border text-gray-800/60 rounded-md px-2 h-10"
                  required
                >
                  <option value="" disabled>
                    Looking for...
                  </option>
                  <option value="interns">Interns</option>
                  <option value="employees">Full-time Employees</option>
                  <option value="both">Both</option>
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
              <div className="flex items-center justify-center">
                <Button
                  type="submit"
                  size="lg"
                  className="w-fit px-8 py-4 bg-backgroundColor text-white text-[20px] hover:bg-backgroundColor"
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
