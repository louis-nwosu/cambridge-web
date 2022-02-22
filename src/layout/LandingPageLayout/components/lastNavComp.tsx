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

export const LastNavComp: FC = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={3} px={0.5}>
        <Box mb={3}>
          <Typography variant="h5" component="p" color="#555">
            Form CRS
          </Typography>
        </Box>
        <div className={classes.textCont}>
          <Typography variant="body2" color="#555"></Typography>
        </div>
      </Grid>
      <Grid item md={3} px={0.5}>
        <Box pb={2}>
          <Typography variant="body1" color="primary">
            Form CRS
          </Typography>
        </Box>
      </Grid>
      <Grid item md={12}>
        <Box my={1.5}>
          <Button variant="contained" color="primary" size="small">
            Form CRS
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export { LastNavComp as default };
