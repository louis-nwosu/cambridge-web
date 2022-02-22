import { FC } from "react";

import { Box, Typography, Container } from "@mui/material";

import image1 from "../../../assets/image2.jpeg";

import "../../../css/sixth.css";

export const Sixth: FC = () => {
  return (
    <Container maxWidth="lg">
      {/* <div className="sixth-flex-container">
        {[0, 0, 0].map((item: any) => (
          <div className="sixth-box">
            <Box>
              <img src={image1} alt="backdrop" className="sixth-images" />
            </Box>
            <div className="sixth-overlay">
              <div>
                <Box>
                  <Typography
                    variant="body1"
                    color="#fff"
                    align="center"
                    fontWeight="bold"
                  >
                    Perspectives and White papers
                  </Typography>
                </Box>
                <Box my={2}>
                  <Typography variant="body2" align="center" color="#fff">
                    Perspectives and White Papers Cambridge offers helpful
                    information and perspectives for the financial professional
                    to aid them in serving the needs of their investing clients.
                  </Typography>
                </Box>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </Container>
  );
};

export { Sixth as default };
