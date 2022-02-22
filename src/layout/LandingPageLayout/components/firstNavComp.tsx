import { FC } from "react";

import { Grid, Typography, Box, Button } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textCont: {
      width: "90%",
    },
  })
);

export const FirstNavComp: FC = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={3} px={0.5}>
        <Box mb={3}>
          <Typography variant="h5" component="p" color="#555">
            Solutions for Financial Professionals
          </Typography>
        </Box>
        <div className={classes.textCont}>
          <Typography variant="body2" color="#555">
            We offer a broad range of choices for independent financial
            professionals regarding solutions for advice, growth, technology and
            independence.
          </Typography>
        </div>
      </Grid>
      <Grid item md={3} px={0.5}>
        <Box pb={2}>
          <Typography variant="body1" color="primary">
            Establishing Your Business
          </Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" color="#555">
            Get Started
          </Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" color="#555">
            Meet the Team
          </Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" color="#555">
            Attend a Live Event
          </Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" color="#555">
            The Transition Process
          </Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" color="#555">
            Frequently Asked Questions
          </Typography>
        </Box>
      </Grid>
      <Grid item md={3} px={0.5}>
        <Box pb={2}>
          <Typography variant="body1" color="primary">
            Supporting Your Business
          </Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" color="#555">
            Advice Solutions
          </Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" color="#555">
            Technology Solutions
          </Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" color="#555">
            Growth Solutions
          </Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" color="#555">
            Solution For Independence
          </Typography>
        </Box>
      </Grid>
      <Grid item md={3} px={0.5}>
        <Box pb={2}>
          <Typography variant="body1" color="primary">
            Helping You Grow
          </Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" color="#555">
            Live Events
          </Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" color="#555">
            Turnkey Office Solutions
          </Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" color="#555">
            Marketing Solutions
          </Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" color="#555">
            Perspective & Whitepapers
          </Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" color="#555">
            Frequently Asked QuestionsI
          </Typography>
        </Box>
      </Grid>
      <Grid item md={12}>
        <Box my={1.5}>
          <Button variant="contained" color="primary" size="small">
            Explore Solutions for Financial Professionals
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export { FirstNavComp as default };
