"use client";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  // CardContent,
  // CardMedia,
  Typography,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import React, { useState } from "react";
import { Colors } from "@/lib/Color";
import "./CardContainer.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { ArrowRight } from "lucide-react";

function CardContainer() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cards, setCards] = useState([
    {
      img: "https://ccicons.s3.amazonaws.com/mba_hires/landing_page/card1.png",
      title: "Gig Interns",
      href: "/Gig-intern",
      subtitle: "Remote Projects - Give work on project basis.",
    },
    {
      img: "https://ccicons.s3.amazonaws.com/mba_hires/landing_page/card2.png",
      title: "Full Time Interns",
      // href: "/remote-intern",
      subtitle: "Periodic Internships - Ideally 2,3 or 5-month long.",
    },
    {
      img: "https://ccicons.s3.amazonaws.com/mba_hires/landing_page/card3.png",
      title: "Permanent Employee",
      // href: "/full-time-employee",
      subtitle: "Long-Term - The usual full time roles.",
    },
  ]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box px={10}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        mt={{ xs: 8, md: 0 }}
      >
        <Box
          display={"flex"}
          justifyItems={"center"}
          alignItems={"center"}
          gap={1}
        >
          <Typography variant="h5" mt={2} mb={1} sx={{ height: "40px" }}>
            Looking for{" "}
          </Typography>
          <div className="inner-headings">
            <span>
              Gig Interns? <br />
              Full Time Interns? <br />
              Permanent Roles? <br />
            </span>
          </div>
        </Box>
        <Typography variant="body1" color={"text.secondary"}>
          We've got you covered with unmatched success!
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        m={2}
        gap={5}
        flexDirection={{ xs: "column", md: "row" }}
      >
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              sx={{
                flex: 1,
                borderRadius: "16px",
                transition: isMobile
                  ? "none"
                  : "transform 0.3s ease, box-shadow 0.3s ease",
                transform: isMobile
                  ? "none"
                  : hoveredIndex === index
                  ? "translateY(-40px)"
                  : "translateY(0)",
                boxShadow: isMobile
                  ? "none"
                  : hoveredIndex === index
                  ? "0px 4px 20px rgba(0,0,0,0.2)"
                  : "none",
                height: { xs: "auto", md: "500px" },
                width: { xs: "100%", md: "auto" },
                marginBottom: { xs: 2, md: 0 },
                backgroundColor: { xs: "#ffe6e6", md: "white" },
                padding: { xs: 1, md: 0 },
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
            >
              <CardActionArea
                onClick={() => (window.location.href = card.href ?? "")}
                sx={{
                  "&:hover": {
                    backgroundColor: isMobile
                      ? "transparent"
                      : Colors.primaryLight.concat("50"),
                    "& .know-more": {
                      display: isMobile ? "none" : "flex",
                      color: Colors.primary,
                    },
                  },
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  gap: 2,
                }}
              >
                <CardMedia
                  component="img"
                  image={card.img}
                  alt={card.title}
                  sx={{
                    borderRadius: "15px",
                    height: { xs: "auto", md: "360px" }, // Apply responsive height here
                  }}
                />

                <CardContent
                  sx={{
                    height: { xs: "auto", md: "100px" },
                    padding: { xs: 0 },
                    textAlign: { xs: "left" }, // Move textAlign here
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      // color: Colors.primary,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {card.title}
                    {isMobile && <ArrowRight />}
                  </Typography>
                  <Typography variant="body2" className=" text-gray-400">
                    {card.subtitle}
                  </Typography>
                </CardContent>
                {!isMobile && (
                  <Box
                    className="know-more"
                    height={"40px"}
                    display="none"
                    justifyContent="center"
                    mb={1}
                  >
                    <Button
                      variant="text"
                      sx={{
                        textTransform: "none",
                        backgroundColor: "transparent",
                        color: Colors.primary2,
                      }}
                    >
                      <Typography variant="h6">Know More</Typography>
                      <ArrowRight />
                    </Button>
                  </Box>
                )}
              </CardActionArea>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}

export default CardContainer;
