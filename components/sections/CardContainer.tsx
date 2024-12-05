"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import "./CardContainer.css";

const cards = [
  {
    img: "https://ccicons.s3.amazonaws.com/mba_hires/landing_page/card1.png",
    title: "Gig Interns",
    subtitle: "Remote Projects - Give work on project basis.",
  },
  {
    img: "https://ccicons.s3.amazonaws.com/mba_hires/landing_page/card2.png",
    title: "Full Time Interns",
    subtitle: "Periodic Internships - Ideally 2,3 or 5-month long.",
  },
  {
    img: "https://ccicons.s3.amazonaws.com/mba_hires/landing_page/card3.png",
    title: "Permanent Employee",
    subtitle: "Long-Term - The usual full time roles.",
  },
];

export default function CardContainer() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className="w-full px-4 md:px-10 py-8 md:py-16">
      <Box className="flex flex-col items-center text-center mb-8 md:mb-12">
        <Box className="flex items-center justify-center gap-2 mb-2">
          <Typography className="text-[23px] md:text-[32px]">
            Looking for
          </Typography>
          <div className="inner-headings text-[23px] md:text-[32px]">
            <span>
              Gig Interns? <br />
              Full Time Interns? <br />
              Permanent Roles? <br />
            </span>
          </div>
        </Box>
        <Typography variant="body1" color="text.secondary">
          We've got you covered with unmatched success!
        </Typography>
      </Box>

      <Box className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {cards.map((card, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: "16px",
              height: "100%",
              transition: "all 0.3s ease",
              transform:
                !isMobile && hoveredIndex === index
                  ? "translateY(-20px)"
                  : "none",
              boxShadow:
                !isMobile && hoveredIndex === index
                  ? "0 20px 25px -5px rgb(0 0 0 / 0.1)"
                  : "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              backgroundColor: isMobile ? "#ffe6e6" : "white",
            }}
            onMouseEnter={() => !isMobile && setHoveredIndex(index)}
            onMouseLeave={() => !isMobile && setHoveredIndex(null)}
          >
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                cursor: "pointer",
              }}
            >
              <CardMedia
                component="img"
                image={card.img}
                alt={card.title}
                sx={{
                  height: { xs: 200, sm: 250, md: 300 },
                  objectFit: "cover",
                }}
              />
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Box className="flex justify-between items-center mb-2">
                  <Typography variant="h6" component="h3">
                    {card.title}
                  </Typography>
                  {isMobile && <ArrowRight />}
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {card.subtitle}
                </Typography>
                {!isMobile && hoveredIndex === index && (
                  <Button
                    variant="text"
                    className="mt-4 text-primary1"
                    endIcon={<ArrowRight />}
                  >
                    Know More
                  </Button>
                )}
              </CardContent>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
