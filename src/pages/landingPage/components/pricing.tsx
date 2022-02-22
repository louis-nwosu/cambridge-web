import { FC, Fragment } from "react";

import { Box, Theme, Typography, Button } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import "../../../css/pricing.css";

const priceInfo = [
  {
    text1: "Starter Account",
    textSmall: "for Beginners",
    price: "5000",
  },
  {
    text1: "Bronze Account",
    textSmall: "INTERMIDIATE",
    price: "10k",
    min: "-5.999 min",
  },
  {
    text1: "Silver Account",
    textSmall: "for Professionals",
    price: "50k",
    min: "-10.999 min",
  },
  {
    text1: "Gold Account",
    textSmall: "for Executives",
    price: "5000",
    min: "unlimited",
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
      transform: "scale(1)",
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
    priceDisp: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    cont: {
      width: "100%",
    },
    priceInfo: {
      display: "flex",
      borderBottom: "1px solid #999",
      padding: "5px 0",
    },
  })
);

export const Pricing: FC = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Box pt={4}>
        <Typography variant="h4" component="p" color="primary" align="center">
          Investment Options
        </Typography>
        <Box className="pricing-text-small">
          <Typography variant="body2" color="#555" align="center">
            Whatever your level of experience, at cambridge investments we are
            confident that we have the right trading account for you. Select
            your account and get premium trading conditions, fast execution and
            24/5 customer support.
          </Typography>
        </Box>
      </Box>
      <div className="pricing-container">
        {priceInfo.map((item: any) => (
          <div className="pricing-container-item">
            <Box p={2} className={classes.cont}>
              <Box
                py={2}
                px={1.5}
                bgcolor="#1f3f5c"
                style={{
                  backgroundImage:
                    "box-shadow: -1px 0px 15px 0px rgba(0,0,0,0.75)",
                }}
              >
                <Typography
                  variant="h6"
                  component="p"
                  color="#fff"
                  fontSize={18}
                >
                  {item.text1}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  align="center"
                  color="#fff"
                >
                  {item.textSmall}
                </Typography>
              </Box>
              <Box>
                <Box py={3} px={1} style={{ border: "1px solid #999" }}>
                  <div className={classes.priceDisp}>
                    <span style={{ marginTop: "15px" }}>
                      <Typography variant="body2" color="primary">
                        $
                      </Typography>
                    </span>
                    <span style={{ marginTop: "10px" }}>
                      <Typography variant="h4" color="primary">
                        {item.price}
                      </Typography>
                    </span>
                    <p style={{ color: "#888" }}>{item.min}</p>
                  </div>
                  <Box py={1.5}>
                    <div className={classes.priceInfo}>
                      <CheckCircleIcon
                        style={{ color: "#888", fontSize: 12 }}
                      />
                      <Box mx={0.5}>
                        <Typography variant="body2" color="#888" fontSize={12}>
                          ROI(30%-35%)
                        </Typography>
                      </Box>
                    </div>
                    <div className={classes.priceInfo}>
                      <CheckCircleIcon
                        style={{ color: "#888", fontSize: "12px" }}
                      />
                      <Box mx={0.5}>
                        <Typography variant="body2" color="#888" fontSize={12}>
                          ROI(30%-35%)
                        </Typography>
                      </Box>
                    </div>
                    <div className={classes.priceInfo}>
                      <CheckCircleIcon
                        style={{ color: "#888", fontSize: "12px" }}
                      />
                      <Box mx={0.5}>
                        <Typography variant="body2" color="#888" fontSize={12}>
                          ROI(30%-35%)
                        </Typography>
                      </Box>
                    </div>
                    <Box py={1.5}>
                      <Button variant="contained" fullWidth size="small">
                        Open Account
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export { Pricing as default };
