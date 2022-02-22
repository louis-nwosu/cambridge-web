import { FC } from "react";

import { Box, Typography, Button } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: "60%",
      margin: "0 auto",
    },
  })
);

export const Fifth: FC = () => {
  const classes = useStyles();
  return (
    <Box py={6} className={classes.container}>
      <Box my={2}>
        <Typography variant="h4" component="p" align="center" color="#fff">
          Are you Independent?
        </Typography>
      </Box>
      <Typography variant="body2" align="center" color="#fff">
        Our culture of true independence means you, the financial professional,
        control the journey. Your long-term success is defined by the value you
        deliver to your clients, and your enduring success is often driven by
        your business efforts being a clear reflection of your personal values.
      </Typography>
      <Box my={2} display="flex" justifyContent="center" alignItems="center">
        <Button variant="contained" color="primary">
          Talk to a business development director
        </Button>
      </Box>
    </Box>
  );
};

export { Fifth as default };
