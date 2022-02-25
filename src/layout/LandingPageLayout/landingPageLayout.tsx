import { FC } from "react";

import { Container, Grid, Typography } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { createStyles, makeStyles } from "@mui/styles";

import { NavBar, Footer } from "./components";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navBar: {
      position: "fixed",
      width: "100%",
      backgroundColor: "#fff",
      top: 0,
      zIndex: 10000,
    },
    footer: {
      padding: "20px 0",
      backgroundColor: "#1f3f5c",
      width: "100%",
    },
    arrowUp: {
      display: "inline-block",
      backgroundColor: "#337eb0",
      padding: "5px",
      borderRadius: "4px",
      position: "fixed",
      bottom: "20px",
      left: "20px",
    },
    container: {},
  })
);

export const LandingPageLayout: FC = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid item md={12}>
        <Typography variant="body2" align="right" color="#469fe3" fontSize={12}>
          Financial Professional Log in | FINRA's BrokerCheck
        </Typography>
        <div className={classes.navBar}>
          <NavBar />
        </div>
        {children}
        <div className={classes.footer}>
          <Footer />
        </div>
        <div className={classes.arrowUp}>
          <a href="#hero">
            <KeyboardDoubleArrowUpIcon style={{ color: "#fff" }} />
          </a>
        </div>
      </Grid>
    </div>
  );
};

export { LandingPageLayout as default };
