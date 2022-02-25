import { FC } from "react";

import { Grid, Typography, Box } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

import Img from "../../../assets/img1.jpeg";

import "../../../css/objectives.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "100%",
      height: "100%",
      margin: "30px 0",
    },
    content: {
      width: "75%",
      margin: "0 auto",
      padding: "20px 10px",
    },
    imgContainer: {
      width: "70%",
      margin: "0 auto",
      height: "50vh",
    },
  })
);

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 3,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export const Objectives: FC = () => {
  return (
    <div className="objectives-container">
      <div className="objective-content">
        <Box>
          <Box>
            <Typography
              variant="h4"
              align="center"
              component="p"
              color="primary"
              fontWeight="bold"
            >
              Objectives
            </Typography>
          </Box>
          <Box className="objective-text">
            <Typography variant="body2" color="#555" align="center">
              We have some of the best trader statistics you will ever find in
              the market. Trading with the best trading bots and algorithms, our
              traders are able to make profit for our investors while we charge
              a fee for out services.
            </Typography>
          </Box>
        </Box>
        <Grid container justifyContent='space-around'>
          <Grid item md={7} xs={12}>
            <div className="objective-image-containerI">
              <img
                src={Img}
                alt="random"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <Typography variant="body1" color="#555">
              With our experts we have been able to create a top notch
              analytical system and great working strategy to ensure
              maximization profit giving our investors the liberty of investing
              and getting returns without worry of thier investments being at
              risk.
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <Box sx={{ flexGrow: 1 }}>
              <Box mb={1.5}>
                <Box>
                  <Typography variant="body1" color="#555">
                    Profit Growth
                  </Typography>
                </Box>
                <BorderLinearProgress variant="determinate" value={70} />
              </Box>
              <Box mb={1.5}>
                <Box>
                  <Typography variant="body1" color="#555">
                    Bonus
                  </Typography>
                </Box>
                <BorderLinearProgress variant="determinate" value={80} />
              </Box>
              <Box mb={1.5}>
                <Box>
                  <Typography variant="body1" color="#555">
                    Trade Efficiency
                  </Typography>
                </Box>
                <BorderLinearProgress variant="determinate" value={90} />
              </Box>
              <Box mb={1.5}>
                <Box>
                  <Typography variant="body1" color="#555">
                    Sustainability Percentage
                  </Typography>
                </Box>
                <BorderLinearProgress variant="determinate" value={70} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export { Objectives as default };
