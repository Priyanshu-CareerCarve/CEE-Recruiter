"use client";
import { Box, Card, Typography } from "@mui/material";
import React, { useState } from "react";
import { Colors } from "@/lib/Color";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

function PartnerBrands() {
  const [companies, setCompanies] = useState([
    {
      name: "Wheels India Limited",
      img: "https://ccicons.s3.amazonaws.com/mba_hires/companies/wheels_india.png",
    },
    {
      name: "CavinKare",
      img: "https://ccicons.s3.amazonaws.com/mba_hires/companies/CavinKare.png",
    },
    {
      name: "Bosch",
      img: "https://ccicons.s3.amazonaws.com/mba_hires/companies/bosch.png",
    },
    {
      name: "Wells Fargo",
      img: "https://ccicons.s3.amazonaws.com/mba_hires/companies/wells_fargo.png",
    },
    {
      name: "BlackBuck Engineers",
      img: "https://ccicons.s3.amazonaws.com/mba_hires/companies/blackbuck.png",
    },
    {
      name: "Succeed Technologies",
      img: "https://ccicons.s3.amazonaws.com/mba_hires/companies/suceed_technologies.png",
    },
    {
      name: "Tutornex",
      img: "https://ccicons.s3.amazonaws.com/mba_hires/companies/tutorNex.png",
    },
    {
      name: "Dhanani & Co",
      img: "https://ccicons.s3.amazonaws.com/mba_hires/companies/Dhanani.png",
    },
    {
      name: "Dashloc",
      img: "https://ccicons.s3.amazonaws.com/mba_hires/companies/Dashloc.png",
    },
    {
      name: "Kosmoderma",
      img: "https://ccicons.s3.amazonaws.com/mba_hires/companies/kosmoderma.png",
    },
    {
      name: "Pink Lemonade",
      img: "https://ccicons.s3.amazonaws.com/mba_hires/companies/pink_lemonade.png",
    },
    {
      name: "Stealthmode",
      img: "https://ccicons.s3.amazonaws.com/mba_hires/companies/stealthmode.png",
    },
    {
      name: "Dashloc",
      img: "https://ccicons.s3.amazonaws.com/mba_hires/companies/Dashloc.png",
    },
    {
      name: "Kosmoderma",
      img: "https://ccicons.s3.amazonaws.com/mba_hires/companies/kosmoderma.png",
    },
    {
      name: "Pink Lemonade",
      img: "https://ccicons.s3.amazonaws.com/mba_hires/companies/pink_lemonade.png",
    },
    {
      name: "Stealthmode",
      img: "https://ccicons.s3.amazonaws.com/mba_hires/companies/stealthmode.png",
    },
  ]);
  return (
    <Box p={1} px={10}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        mx={{ xs: 2 }}
        mb={8}
      >
        <Typography
          variant="h5"
          mt={2}
          mb={1}
          align="center"
          fontWeight={{ xs: "500" }}
          fontSize={{ xs: "24px", md: "auto" }}
        >
          <span className=" text-gray-600">Past</span>{" "}
          <span className=" text-primary1">Recruiters</span>
        </Typography>
        <Typography variant="body1" className=" text-gray-500" align="center">
          Some of the brands that have benefited from our expertise.
        </Typography>

        <Box
          display={"flex"}
          flexWrap={"wrap"}
          my={4}
          rowGap={{ xs: "16px", md: "48px" }}
          columnGap={{ xs: "16px", md: "34px" }}
          justifyContent={{ xs: "center", md: "center" }}
          mx={{ xs: 0, md: 4 }}
          width={"100%"}
        >
          {companies.slice(0, 12).map((company, index) => (
            <Card
              key={index}
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                width: { xs: "103px", md: "180px" },
                height: { xs: "52px", md: "50px" },
                boxShadow: `0px 2px 16px 0px rgb(0,0,0,0.1)`,
                borderRadius: "8px",
                gap: 1,
              }}
            >
              <Box
                component={"img"}
                src={company.img}
                sx={{
                  width: { xs: "48px", md: "auto" },
                  height: { xs: "50px", md: "auto" },
                  objectFit: "contain",
                }}
              />
              <Typography className=" text-gray-500 text-[13px] font-medium">
                {company.name}
              </Typography>
            </Card>
          ))}
        </Box>
        <Button className="gap-2 bg-primary1 text-white w-72 hover:bg-primary1">
          Get Started <MoveRight size={15} color="white" />
        </Button>
      </Box>
    </Box>
  );
}

export default PartnerBrands;
