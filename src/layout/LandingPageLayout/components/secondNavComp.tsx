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

export const SecondNavComp: FC = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={3} px={0.5}>
        <Box mb={3}>
          <Typography variant="h5" component="p" color="#555">
            Information For Investors
          </Typography>
        </Box>
        <div className={classes.textCont}>
          <Typography variant="body2" color="#555">
            Cambridge offers information, resources, and tools for investing
            clients to help you as you work with your trusted advisor.
          </Typography>
        </div>
      </Grid>
      <Grid item md={3} px={0.5}>
        <Box pb={2}>
          <Typography variant="body1" color="primary">
            Financial Advice
          </Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" color="#555">
            Management Of Assets
          </Typography>
        </Box>
      </Grid>
      <Grid item md={3} px={0.5}>
        <Box pb={2}>
          <Typography variant="body1" color="primary">
            Investor Resources
          </Typography>
        </Box>
        <Box pb={2}>
          <Typography variant="body2" color="#555">
            Cambride Disclosures.
          </Typography>
        </Box>
        <Box pb={2}>
          <Typography variant="body2" color="#555">
            Investor Resources & Tools
          </Typography>
        </Box>
      </Grid>
      <Grid item md={12}>
        <Box my={1.5}>
          <Button variant="contained" color="primary" size="small">
            Information For Investors
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export { SecondNavComp as default };
