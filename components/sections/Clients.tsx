import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { Colors } from "../../lib/Color";
import "./Clients.css";

function Clients() {
  const programs: string[] = [
    "B.Tech",
    "M.Tech",
    "Full Time 1-Year MBA",
    "Full Time 2-Year MBA",
    "BBA",
    "B.Com.",
    "M.Com.",
    "B.Sc.",
    "M.Sc.",
    "BA",
    "MA",
    "B.Des.",
    "B.Arch.",
    "M.Des.",
    "B.F.Tech.",
    "Working Professional",
    "Student",
    "Fresher",
    ">1 year Work Ex",
    "1 Year Work Ex",
    "2-4 Years Work Ex",
    ">4 Years Work Ex",
  ];

  return (
    <Box>
      <Box overflow={"hidden"} height={"550px"} className=" relative">
        <Box
          overflow={"hidden"}
          sx={{
            height: "550px",
            width: { xs: "180vw", md: "130vw" },
            borderRadius: { xs: "50%/20%", md: "100% 100% 0 0" }, // Creates the arc shape
            backgroundColor: Colors.primaryLight,
            transform: { xs: "translate(-22%, 0%)", md: "translate(-12%, 0%)" },
            boxShadow: `${Colors.orange} 4px 4px 15px, ${Colors.orange} 4px 4px 15px`,
            background: `linear-gradient(to bottom, ${Colors.primaryLight}, #FFFFFF)`,
          }}
          className=""
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            mt={4}
          >
            <Typography
              textAlign={"center"}
              color={"text.secondary"}
              // className=""
              display={"inline"}
              fontSize={"20px"}
            >
              Hire from numerous programs
            </Typography>
            <div className="logos">
              <div className="logos-slide">
                {programs.map((program, index) => (
                  <div
                    key={index}
                    className=" flex items-center justify-center text-primary1 text-[28px]"
                  >
                    <span className="px-6">{program}</span>
                    {index !== programs.length - 1 && (
                      <span className="text-[#FBC983]">|</span>
                    )}
                  </div>
                ))}
              </div>

              {/* <div className="logos-slide">
                
              </div>

              <div className="logos-slide">
                <img
                  src="https://ccicons.s3.amazonaws.com/mba_hires/colleges/iimb.png"
                  alt="iimb"
                />
                <img
                  src="https://ccicons.s3.amazonaws.com/mba_hires/colleges/iimraipur.png"
                  alt="iimraipur"
                />
                <img
                  src="https://ccicons.s3.amazonaws.com/mba_hires/colleges/iima.png"
                  alt="iima"
                />
                <img
                  src="https://ccicons.s3.amazonaws.com/mba_hires/colleges/iiml.png"
                  alt="iiml"
                />
                <img
                  src="https://ccicons.s3.amazonaws.com/mba_hires/colleges/iimc.png"
                  alt="iimc"
                />
                <img
                  src="https://ccicons.s3.amazonaws.com/mba_hires/colleges/iimk.png"
                  alt="iimk"
                />
                <img
                  src="https://ccicons.s3.amazonaws.com/mba_hires/colleges/iims.png"
                  alt="iims"
                />
                <img
                  src="https://ccicons.s3.amazonaws.com/mba_hires/colleges/iimu.png"
                  alt="iimu"
                />
                <img
                  src="https://ccicons.s3.amazonaws.com/mba_hires/colleges/iimrohtak.png"
                  alt="iimrohtak"
                />
                <img
                  src="https://ccicons.s3.amazonaws.com/mba_hires/colleges/iimt.png"
                  alt="iimt"
                />
                <img
                  src="https://ccicons.s3.amazonaws.com/mba_hires/colleges/iimranchi.png"
                  alt="iimranchi"
                />
                <img
                  src="https://ccicons.s3.amazonaws.com/mba_hires/colleges/iimkashipur.png"
                  alt="iimkashipur"
                />
              </div> */}
            </div>
            {/* <Box
              component={"div"}
              sx={{
                overflow: "hidden",
                height: "100%",
                width: "80vw",
                position: "relative",
              }}
              mt={4}
            /> */}
          </Box>
          <Box py={1} component={"div"} width={"50%"} className="mx-auto">
            <div className=" flex justify-center items-center gap-2">
              <div className=" border border-primary w-64"></div>
              <Typography
                textAlign={{ xs: "center" }}
                color={"text.secondary"}
                my={5}
                variant="h6"
              >
                Our Stats Speak Volumes
              </Typography>
              <div className=" border border-primary w-64"></div>
            </div>
            {/* <Divider className=" text-primary">
              
            </Divider> */}
            <Box
              mx={3}
              my={1}
              p={2}
              // bgcolor={"white"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              gap={2}
              display={"flex"}
              flexDirection={{ xs: "column", md: "row" }}
              borderRadius={5}
            >
              <Box sx={{ textAlign: { xs: "center" } }}>
                <Typography variant="h3" color={Colors.green}>
                  20,000+
                </Typography>
                <Typography color={"text.secondary"}>
                  B-School Candidates
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box sx={{ textAlign: { xs: "center" } }}>
                <Typography variant="h3" color={Colors.green}>
                  100+
                </Typography>
                <Typography color={"text.secondary"}>
                  Top NIRF B-School
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box sx={{ textAlign: { xs: "center" } }}>
                <Typography variant="h3" color={Colors.green}>
                  50+
                </Typography>
                <Typography color={"text.secondary"}>
                  Recruiters Assisted
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box sx={{ textAlign: { xs: "center" } }}>
                <Typography variant="h3" color={Colors.green}>
                  100+
                </Typography>
                <Typography color={"text.secondary"}>
                  Industry - Role Combinations
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
