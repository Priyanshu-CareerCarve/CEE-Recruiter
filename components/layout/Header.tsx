"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import Box from "@mui/material/Box";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white fixed shadow-sm z-10">
      <Box className="section-container">
        <Box className="flex justify-between items-center h-16">
          <Box sx={{ "&:hover": { cursor: "pointer" } }}>
            <img
              src="https://www.careercarve.com/Career_Carve_Logo__1_-removebg-preview%202.png"
              className="w-[65%] h-[65%]"
              alt="careercarve"
            />
          </Box>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/candidates" className="text-gray-700">
              Candidates
            </Link>
            <Button
              variant="default"
              className="text-primary bg-white border border-primary w-40 gap-2 hover:bg-white hover:text-primary hover:border-primary"
            >
              Log In/Sign Up
              <ChevronDown size={20} />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </Box>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/candidates"
                className="block px-3 py-2 text-gray-700"
              >
                Candidates
              </Link>
              <Button
                variant="default"
                className=" text-primary bg-white border border-primary w-40 gap-2"
              >
                Login / Sign Up
              </Button>
            </div>
          </div>
        )}
      </Box>
    </header>
  );
}
