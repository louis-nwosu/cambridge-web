import { FC, useState } from "react";

import { Grid, Typography, Box } from "@mui/material";
import { Search } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

import { FirstNavComp } from "./firstNavComp";
import { SecondNavComp } from "./secondNavComp";
import { ThirdNavComp } from "./thirdNavComp";
import { LastNavComp } from "./lastNavComp";
import TechnicalAnalysis from "./widget";

import "../../../css/navbar.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navLinks: {
      cursor: "pointer",
    },
    pageContainer: {
      position: "relative",
    },
    navPopUp: {
      position: "absolute",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    popUpContent: {
      width: "80%",
      backgroundColor: "#fff",
      padding: "40px 30px",
      boxShadow: "-4px 0px 43px 3px rgba(0,0,0,0.75)",
      transition: "all 0.1s ease-in-out",
      transform: "translateY(30px)",
    },
    popUpContentShow: {
      width: "80%",
      backgroundColor: "#fff",
      padding: "40px 30px",
      boxShadow: "-4px 0px 43px 3px rgba(0,0,0,0.75)",
      transition: "all 0.1s ease-in-out",
      transform: "translateY(0px)",
    },
    hideWhenSmall: {},
  })
);

export const NavBar: FC = () => {
  const classes = useStyles();

  const [showHover, setShowHover] = useState<{
    first: Boolean;
    second: Boolean;
    third: Boolean;
    last: Boolean;
  }>({
    first: false,
    second: false,
    third: false,
    last: false,
  });
  return (
    <div className={classes.pageContainer}>
      <TechnicalAnalysis />
      <Grid
        container
        // justifyContent="space-between"
        alignItems="center"
        py={1}
        px={2}
        style={{ boxShadow: "-1px 0px 15px 0px rgba(0,0,0,0.75)" }}
      >
        <Grid item md={1}>
          <Typography variant="h5" component="p">
            CAMBRIDGE
          </Typography>
        </Grid>
        <Grid item md={11} className="navbar-hide-sm">
          <Grid container justifyContent="center" alignItems="center">
            <div style={{ margin: '0 15px' }}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                onClick={() =>
                  setShowHover({
                    ...showHover,
                    first: !showHover.first,
                    second: false,
                    third: false,
                    last: false,
                  })
                }
              >
                <Typography
                  variant="body2"
                  color="primary"
                  component="p"
                  fontSize={12}
                  fontWeight="bold"
                  className={classes.navLinks}
                >
                  Solutions for Professionals
                </Typography>
                <KeyboardArrowDownIcon color="primary" />
              </Box>
            </div>
            <div style={{ margin: '0 15px' }}>
              <Box
                display="flex"
                alignItems="center"
                onClick={() =>
                  setShowHover({
                    ...showHover,
                    first: false,
                    second: !showHover.second,
                    third: false,
                    last: false,
                  })
                }
              >
                <Typography
                  variant="body2"
                  color="primary"
                  component="p"
                  fontSize={12}
                  fontWeight="bold"
                  className={classes.navLinks}
                >
                  Information for Investors
                </Typography>
                <KeyboardArrowDownIcon color="primary" />
              </Box>
            </div>
            <div style={{ margin: '0 15px' }}>
              <Box
                display="flex"
                alignItems="center"
                onClick={() =>
                  setShowHover({
                    ...showHover,
                    first: false,
                    second: false,
                    third: !showHover.third,
                    last: false,
                  })
                }
              >
                <Typography
                  variant="body2"
                  color="primary"
                  component="p"
                  fontSize={12}
                  fontWeight="bold"
                  className={classes.navLinks}
                >
                  About
                </Typography>
                <KeyboardArrowDownIcon color="primary" />
              </Box>
            </div>
            <Grid item md={1}>
              <Search color="primary" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {showHover.first && (
        <div className={classes.navPopUp}>
          <div
            className={
              showHover.first ? classes.popUpContentShow : classes.popUpContent
            }
          >
            <FirstNavComp />
          </div>
        </div>
      )}
      {showHover.second && (
        <div className={classes.navPopUp}>
          <div
            className={
              showHover.first ? classes.popUpContentShow : classes.popUpContent
            }
          >
            <SecondNavComp />
          </div>
        </div>
      )}
      {showHover.third && (
        <div className={classes.navPopUp}>
          <div
            className={
              showHover.first ? classes.popUpContentShow : classes.popUpContent
            }
          >
            <ThirdNavComp />
          </div>
        </div>
      )}
      {showHover.last && (
        <div className={classes.navPopUp}>
          <div
            className={
              showHover.first ? classes.popUpContentShow : classes.popUpContent
            }
          >
            <LastNavComp />
          </div>
        </div>
      )}
    </div>
  );
};

export { NavBar as default };
