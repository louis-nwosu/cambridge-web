import { FC } from "react";

import { Box, Theme, Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";

import "../../../css/featured.css";

const featuresContent = [
  {
    icon: <AnalyticsIcon style={{ fontSize: "48px", color: "#fff" }} />,
    textHeader: "BUSINESS ANALYSIS",
    textContent:
      "Cambride is a financial solution firm focused on serving independent professionals and their clients.",
  },
  {
    icon: <StackedLineChartIcon style={{ fontSize: "48px", color: "#fff" }} />,
    textHeader: "BUSINESS EXPERTISE",
    textContent:
      "At cambride, we understand that business professionals need to chart the part that works best for their use cases.",
  },
  {
    icon: <PieChartIcon style={{ fontSize: "48px", color: "#fff" }} />,
    textHeader: "Culture and Value",
    textContent:
      "We believe a firms culture influences its reputation. We think you can take a look at a firms started purpose and get a better understanding of its business engagements.   ",
  },
  {
    icon: <BubbleChartIcon style={{ fontSize: "48px", color: "#fff" }} />,
    textHeader: "INVESTMENT CONNECTIONS",
    textContent:
      "Invest with confidence, knowing that multiple entities are working towards t your financial assets and looking out for better investment option.",
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "75%",
      padding: "10px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    itemContainer: {
      padding: "15px 10px",
    },
    Text: {
      width: "90%",
    },
    dash: {
      padding: "4px",
      width: "5%",
      backgroundColor: "lightblue",
      margin: "10px 0",
    },
    cont: {
      backgroundColor: " rgb(2, 0, 36)",
      backgroundImage:
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(56,24,129,1) 41%, rgba(0,212,255,1) 100%)",
    },
  })
);

export const FeaturesSection: FC = () => {
  const classes = useStyles();
  return (
    <div className="featured-container">
      {featuresContent.map((item: any) => (
        <div className={classes.itemContainer}>
          <Box bgcolor="darkslateblue" p={3} className={classes.cont}>
            <Box pb={1}>
              <Box display="flex" alignItems="center" justifyContent="center">
                {item.icon}
              </Box>
              <Typography variant="h5" component="p" color="#fff">
                {item.textHeader}
              </Typography>
            </Box>
            <div className={classes.dash}></div>
            <Box className={classes.Text}>
              <Typography variant="body1" color="#fff">
                {item.textContent}
              </Typography>
            </Box>
          </Box>
        </div>
      ))}
    </div>
  );
};

export { FeaturesSection as default };
