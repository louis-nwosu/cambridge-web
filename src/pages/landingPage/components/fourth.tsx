import { FC, Fragment } from "react";

import { Box, Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

import image1 from "../../../assets/image2.jpeg";
import image2 from "../../../assets/img1.jpeg";

import "../../../css/fourth.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      width: "43%",
    },
    images: {
      width: "100%",
      height: "200px",
      transition: "transform .2s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    imageContainer: {
      width: "90%",
      margin: "0 auto",
    },
  })
);

const displays = [
  {
    img: image1,
    textHeader: "Solutions for Financial Professionals",
    textBody: ` Let us help you position your advice business for the future with
    innovative financial solutions focused on giving you choices to
    meet your unique business goals.`,
  },
  {
    img: image2,
    textHeader: "Information for Investors",
    textBody: `We are here to support your independent business as a financial professional and your investing clients as they work with their financial professional to reach their goals.`,
  },
];

export const Fourth: FC = () => {
  const classes = useStyles();
  return (
    <Box className="fourth-container">
      {displays.map((item: any) => (
        <Fragment key={Math.random()}>
          <Box className="fourth-box">
            <div className={classes.imageContainer}>
              <img src={item.img} alt="first" className={classes.images} />
            </div>
            <Box my={1}>
              <Typography
                variant="h6"
                component="p"
                align="center"
                color="primary"
              >
                {item.textHeader}
              </Typography>
            </Box>
            <Box py={1} className="fourth-text-container">
              <Typography variant="body2" align="center">
                {item.textBody}
              </Typography>
            </Box>
          </Box>
        </Fragment>
      ))}
    </Box>
  );
};

export { Fourth as default };
