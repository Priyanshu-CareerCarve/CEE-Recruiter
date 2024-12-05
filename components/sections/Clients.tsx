import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../lib/Color";
import "./Clients.css";

function Clients() {
  const programs: string[] = [
    "B.Tech",
    "M.Tech",
    "BBA",
    "B.Com.",
    "M.Com.",
    "B.Sc.",
    "M.Sc.",
    "B.A.",
    "MA",
    "MBA",
    "PGDM",
    "B.E.",
    "B.Pharm.",
    "B.Des.",
    "B.Arch.",
    "M.Des.",
    "B.F.Tech.",
  ];
  const renderInfiniteScrollPrograms = () => {
    // Duplicate the programs to create a seamless loop
    const infinitePrograms = [...programs, ...programs];

    return (
      <div className="infinite-scroll-container">
        <div className="infinite-scroll-content">
          {infinitePrograms.map((program, index) => (
            <React.Fragment key={index}>
              <span className="program-name">{program}</span>
              {index !== infinitePrograms.length - 1 && (
                <span className="separator">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };
  return (
    <Box>
      <Box
        overflow={"hidden"}
        height={{ xs: "800px", md: "500px" }}
        className="relative"
      >
        <Box
          overflow={"hidden"}
          sx={{
            height: { xs: "800px", md: "500px" },
            width: { xs: "180vw", md: "130vw" },
            borderRadius: { xs: "50% 50% 0 0", md: "100% 100% 0 0" },
            backgroundColor: Colors.primaryLight,
            transform: { xs: "translate(-22%, 0%)", md: "translate(-12%, 0%)" },
            boxShadow: `${Colors.orange} 4px 4px 15px, ${Colors.orange} 4px 4px 15px`,
            background: `linear-gradient(to bottom, ${Colors.primaryLight}, #FFFFFF)`,
          }}
          className=""
        >
          <div className="flex flex-col justify-center mt-4">
            <h2 className="text-center text-gray-600 text md:text-xl">
              Hire from numerous programs
            </h2>

            {renderInfiniteScrollPrograms()}
          </div>
          <Box py={1} component={"div"} width={"50%"} className="mx-auto">
            <div className="flex justify-center items-center gap-2">
              <div className="border border-primary w-32 md:w-80"></div>
              <Typography
                textAlign={{ xs: "center" }}
                color={"text.secondary"}
                my={5}
                variant="h6"
              >
                Our Stats Speak Volumes
              </Typography>
              <div className="border border-primary w-32 md:w-80"></div>
            </div>
            <Box
              mx={3}
              my={1}
              p={2}
              className=" flex justify-between items-center gap-x-8"
              flexDirection={{ xs: "column", md: "row" }}
              borderRadius={5}
            >
              <Box sx={{ textAlign: { xs: "center" } }}>
                <Typography
                  className=" text-[48px] text-center md:text-left"
                  color={Colors.green}
                >
                  2,00,000+
                </Typography>
                <Typography className=" text-gray-400 text-center md:text-left text-[20px]">
                  1x1s Conducted
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box sx={{ textAlign: { xs: "center" } }}>
                <Typography
                  className=" text-[48px] text-center md:text-left"
                  color={Colors.green}
                >
                  60,000+
                </Typography>
                <Typography className=" text-gray-400 text-center md:text-left text-[20px]">
                  Students Assessed
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box sx={{ textAlign: { xs: "center" } }}>
                <Typography
                  className=" text-[48px] text-center md:text-left"
                  color={Colors.green}
                >
                  50+
                </Typography>
                <Typography className=" text-gray-400 text-center md:text-left text-[20px]">
                  Recruiters Assisted
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box sx={{ textAlign: { xs: "center" } }}>
                <Typography
                  className=" text-[48px] text-center md:text-left"
                  color={Colors.green}
                >
                  40+
                </Typography>
                <Typography className=" text-gray-400 text-center md:text-left text-[20px]">
                  Top Colleges
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Clients;
