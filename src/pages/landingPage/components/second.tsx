import { FC } from "react";

import { Box, Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

import img from "../../../assets/img1.jpeg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      width: "100%",
      height: "450px",
    },
    imgCont: {
      width: "80%",
      height: "450px",
      margin: "0 auto",
    },
    text: {
      width: "70%",
      margin: "20px auto",
    },
  })
);

export const Second: FC = () => {
  const classes = useStyles();
  return (
    <Box py={5}>
      <Typography variant="h4" component="p" align="center" color="#337eb0">
        Celebrating 40 Years Together
      </Typography>
      <div className={classes.imgCont}>
        <img src={img} alt="house" className={classes.img} />
      </div>
      <div className={classes.text}>
        <Typography variant="h6" component="p" color="#337eb0" align="center">
          Cambridge offers a broad range of choices for independent financial
          professionals regarding solutions for advice, growth, technology and
          independence. Celebrating our 40th anniversary, we recognize it has
          always been about the people. Watch how Eric Schwartz, Founder and
          Executive Chairman, just wanted to build something wonderful.
        </Typography>
      </div>
    </Box>
  );
};

export { Second as default };
