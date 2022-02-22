import { FC, Fragment } from "react";

import { Box, Typography, Button } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { Link } from "react-router-dom";

import vid from "../../../videos/vid.mp4";
import mobileImage from '../../../assets/mobile-image.jpg';
import "../../../css/hero.css";


export const Hero: FC = () => {

  return (
    <Fragment>
      <div id="hero" className="hero-container-desktop">
        <video autoPlay loop muted id="video-bg" className="hero-video">
          <source src={vid} type="video/mp4" />
        </video>
        <div className="lp-overlay-desktop">
          <div>
            <p className="lp-overlay-text">Join us in making a difference. Join Cambridge</p>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Link to='/login' style={{ textDecoration: 'none' }}>
                <Button variant="contained" color='primary'>Get Started</Button>
              </Link>
            </Box>
          </div>
        </div>
      </div>
      <div className="landing-page-mobile">
        <img src={mobileImage} alt="omo" className="landing-page-image" />
        <div className="lp-overlay-desktop">
          <div>
            <p className="lp-overlay-text">Join us in making a difference. Join Cambridge</p>
            <Box display='flex' justifyContent='center' alignItems='center'>
              <Link to='/login' style={{ textDecoration: 'none' }}>
                <Button variant="contained" color='primary'>Get Started</Button>
              </Link>
            </Box>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { Hero as default };
