"use client";

import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";

export function Footer() {
  const Mobile = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      className={`flex justify-between items-center ${
        Mobile ? "flex-col" : "flex-row"
      } w-full px-4 md:px-20 py-4 sm:px-12`}
    >
      <Box>
        <Image
          src="/Career_Carve_Logo__1_-removebg-preview 2.png"
          width={Mobile ? 140 : 200}
          height={Mobile ? 60 : 100}
          alt="CareerCarve"
          className="object-contain"
        />
        <Typography
          className="!text-12 sm:!text-12 "
          sx={{
            color: "#A8A8A8",
          }}
        >
          &#169; 2024 Parivartana Consulting Private Limited. All rights
          reserved
        </Typography>
      </Box>
      <Box className="flex items-center gap-4 sm:gap-10">
        <Link href="/Disclaimer">
          <Typography
            className="!text-16 sm:!text-16 decoration-1 underline"
            sx={{
              color: "#0B3842",
            }}
          >
            Disclaimer
          </Typography>
        </Link>
        <Link href="/PrivacyPolicy">
          <Typography
            className="!text-16 sm:!text-16 decoration-1 underline"
            sx={{
              color: "#0B3842",
            }}
          >
            Privacy Policy
          </Typography>
        </Link>
        <Link href="/TermsOfUse">
          <Typography
            className="!text-16 sm:!text-16 decoration-1 underline"
            sx={{
              color: "#0B3842",
            }}
          >
            Terms of Use
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}
