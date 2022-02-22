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

export const ThirdNavComp: FC = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item md={3} px={0.5}>
        <Box mb={3}>
          <Typography variant="h5" component="p" color="#555">
            About Cambridge
          </Typography>
        </Box>
        <div className={classes.textCont}>
          <Typography variant="body2" color="#555">
            We are an internally controlled financial solutions firm dedicated
            to serving independent financial professionals and their investing
            clients.
          </Typography>
        </div>
      </Grid>
      <Grid item md={3} px={0.5}>
        <Box pb={2}>
          <Typography variant="body1" color="primary">
            Our Company
          </Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" color="#555">
            Purpose & Values
          </Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" color="#555">
            Independence & Leadership
          </Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" color="#555">
            The Cambridge Foundation
          </Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" color="#555">
            Careers
          </Typography>
        </Box>
      </Grid>
      <Grid item md={3} px={0.5}>
        <Box pb={2}>
          <Typography variant="body1" color="primary">
            News & Insights
          </Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" color="#555">
            Awards & Recognition
          </Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" color="#555">
            Podcast & Blogs
          </Typography>
        </Box>
      </Grid>
      <Grid item md={3} px={0.5}>
        <Box pb={2}>
          <Typography variant="body1" color="primary">
            Contact Cambridge
          </Typography>
        </Box>
        <Box pb={1.5}>
          <Typography variant="body2" color="#555">
            Cambridge Support
          </Typography>
        </Box>
      </Grid>
      <Grid item md={12}>
        <Box my={1.5}>
          <Button variant="contained" color="primary" size="small">
            About Cambridge
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export { ThirdNavComp as default };
