import { FC } from "react";

import { Grid, Typography, Container, Box } from "@mui/material";
import { makeStyles, createStyles, ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";
import { Theme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

import img1 from "../../../assets/img1.jpeg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: "50px 15px",
      // backgroundImage: `url(${Image})`,
    },
    socialIcons: {
      justifyContent: "space-between",
      display: "flex",
      width: "30%",
    },
    imgs: {
      width: "70%",
      height: "70%",
      margin: "10px 0",
      borderRadius: "4px",
    },
  })
);

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

export const Footer: FC = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container className={classes.container}>
        <Grid item md={12}>
          <Grid container>
            <Grid item md={4}>
              <Typography variant="body1" fontWeight="bold" color="#fff">
                Cambridge Investment Research Inc.
              </Typography>
              <Box my={1.5}>
                <Typography variant="body2" color="#fff" fontSize={12}>
                  1776 Pleasant Plain Road
                  <br />
                  Fairfield, IA 52556-8757
                  <br />
                  Business Development: 877.688.2369
                  <br />
                  Reception: 800.777.6080
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Box pb={1}>
                <Typography variant="body2" color="#fff">
                  Solutions For Financial Professionals
                </Typography>
              </Box>
              <Box py={1}>
                <Typography variant="body2" color="#fff">
                  Information for Investors
                </Typography>
              </Box>
              <Box py={1}>
                <Typography variant="body2" color="#fff">
                  Disclosures
                </Typography>
              </Box>
              <Box py={1}>
                <Typography variant="body2" color="#fff">
                  About Cambridge
                </Typography>
              </Box>
              <Box py={1}>
                <Typography variant="body2" color="#fff">
                  Careers
                </Typography>
              </Box>
              <Box py={1}>
                <Typography variant="body2" color="#fff">
                  Financial Professional Log In
                </Typography>
              </Box>
            </Grid>
            <Grid item md={4}>
              <Typography variant="body1" fontWeight="bold" color="#fff">
                Cambridge on Twitter
              </Typography>
              <Grid container>
                <Grid item md={6}>
                  <img src={img1} alt="random" className={classes.imgs} />
                </Grid>
                <Grid item md={6}>
                  <Box my={1}>
                    <Typography variant="body2" color="#fff" fontSize={13}>
                      Congratulations to Cambridge financial professional and
                      Partner at Client Centric Advisors, Von D. Cook II, for
                      joining Cambridge
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={10}>
                  <Box mt={-2}>
                    <Typography variant="body2" color="#fff" fontSize={13}>
                      President and CEO Amy Webber as another newly appointed
                      member of @FSIwashington's 2022 Board of Directors.
                      https://t.co/mFggscciaM https://t.co/2IKGxmOp5P
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box my={1.5}>
                <Grid container>
                  <Grid item md={6}>
                    <img src={img1} alt="random" className={classes.imgs} />
                  </Grid>
                  <Grid item md={6}>
                    <Box my={1}>
                      <Typography variant="body2" color="#fff" fontSize={13}>
                        Look up! Highway 34 has some new roadside décor!👀 After
                        raising a record-breaking $134K in support of the
                        @JTFoundation, they surprised us in a very special way.
                        Thank you to Cambridge Nation for the
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item md={10}>
                    <Box mt={1}>
                      <Typography variant="body2" color="#fff" fontSize={13}>
                        outpouring support to achieve this milestone.
                        https://t.co/mthTzMajlt https://t.co/uBb6DZoskb
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12}>
          <Box my={2}>
            <Typography variant="body2" color="#fff">
              Copyright © 2022 Cambridge Investment Research Inc. All rights
              reserved. Member FINRA / SIPC
            </Typography>
            <Box my={1}>
              <Typography variant="body2" color="#fff" fontWeight="bold">
                Check the background of this firm on FINRA's BrokerCheck.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export { Footer as default };
