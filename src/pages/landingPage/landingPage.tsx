import { FC } from "react";

import { Grid } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

import { LandingPageLayout } from "../../layout";
import {
  Hero,
  Second,
  Third,
  Fourth,
  Fifth,
  Sixth,
  FeaturesSection,
  Pricing,
  Objectives,
} from "./components";
import Image from "../../assets/bg.jpg";
import FeaturesImage from "../../assets/featuresImage.jpg";

import "../../css/landingPage.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    containerThird: {
      backgroundColor: "#6e87eb",
      backgroundImage: `url(${Image})`,
      backgroundOrigin: "border-box",
      backgroundPosition: "100%",
      backgroundRepeat: "no-repeat",
    },
    containerThird2: {},
    featuresSection: {},
    imgs: {
      width: "100%",
      height: "100%",
    },
  })
);

export const LandingPage: FC = () => {
  const classes = useStyles();
  return (
    <LandingPageLayout>
      <Grid container>
        <Grid item md={12}>
          <Hero />
        </Grid>
        <Grid item md={12}>
          <Second />
        </Grid>
        <Grid item md={12} className={classes.containerThird2}>
          <Third />
        </Grid>
        <Grid item md={12} className={classes.featuresSection}>
          <div className="landingPage-featured-container">
            <div className="landingPage-featured-inner-div">
              <img
                src={FeaturesImage}
                alt="features"
                className={classes.imgs}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                backdropFilter: "blur(4px)",
              }}
            >
              <FeaturesSection />
            </div>
          </div>
        </Grid>
        <Grid item md={12}>
          <Fourth />
        </Grid>
        <Grid item md={12} className={classes.containerThird}>
          <Fifth />
        </Grid>
        <Grid item md={12} className="landingPage-sixth-container">
          <Sixth />
        </Grid>
        <Grid item md={12} style={{ width: "100%" }}>
          <Pricing />
        </Grid>
        <Grid item md={12}>
          <Objectives />
        </Grid>
      </Grid>
    </LandingPageLayout>
  );
};

export { LandingPage as default };
