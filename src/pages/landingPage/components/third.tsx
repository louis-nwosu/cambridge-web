import { FC } from "react";

import { Box, Typography } from "@mui/material";
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

export const Third: FC = () => {
  const classes = useStyles();
  return (
    <Box py={6} className={classes.container}>
      <Typography variant="body2" align="center" color="#333">
        Cambridge Investment Group, Inc. is an internally controlled financial
        solutions firm focused on serving independent financial professionals
        and their investing clients with a broad range of choices regarding
        financial Solutions. Cambridge’s national reach includes: Cambridge
        Investment Research Advisors, Inc. – a large corporate RIA; and
        Cambridge Investment Research Inc. – an independent broker-dealer.
      </Typography>
      <Box py={2}>
        <Typography variant="body2" align="center" color="primary">
          Learn more about Cambridge
        </Typography>
      </Box>
    </Box>
  );
};

export { Third as default };
