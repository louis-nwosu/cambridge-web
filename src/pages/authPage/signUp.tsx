import { FC, useState } from "react";

import {
  Typography,
  Button,
  Box,
  TextField,
} from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


import { signUp } from "../../store/reducers/authReducer/actionCreators";
import bgImage from '../../assets/auth.jpg'
import "../../css/signup.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: `url(${bgImage})`,
      backgroundSize: '100%',
      backgroundOrigin: '10px',
      backgroundPosition: '10px'
    },
    container: {
      width: "30%",
      margin: "0 auto",
      padding: "30px",
      backgroundColor: "#fff",
      height: "70vh",
      boxShadow: "-1px -1px 23px 4px rgba(0,0,0,0.75)",
    },
    pointer: {
      cursor: "pointer",
    },
  })
);

export const SignUp: FC<{ switchComp: () => void }> = ({ switchComp }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const isLoading = useSelector((state: any) => state.auth.isLoading)
  const hasError = useSelector((state: any) => state.auth.hasError)

  const [fullname, setFullname] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <div className={classes.body}>
      <div className="signup-container">
        <Box>
          <Typography
            variant="h3"
            color="#777"
            component="p"
            align="center"
            fontWeight="bold"
          >
            CAMBRIDGE
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h6"
            color="primary"
            component="p"
            align="center"
            fontWeight="bold"
          >
            Cambridge Log In
          </Typography>
        </Box>
        <Box my={4}>
          <Box my={1}>
            <TextField
              variant="standard"
              placeholder="Fullname"
              fullWidth
              color="primary"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </Box>
          <TextField
            variant="standard"
            placeholder="Email Address"
            fullWidth
            color="primary"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Box my={1}>
            <TextField
              variant="standard"
              placeholder="Password"
              fullWidth
              color="primary"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Box>
        </Box>

        <Box my={1}>
          <Button fullWidth color="primary" variant="contained" onClick={() => {
            dispatch(signUp({ fullname, email, password }, navigate))
          }}>
            {isLoading ? 'Loading...' : 'Sign up'}
          </Button>
          <Box my={0.5}>
            <Typography
              variant="body2"
              color="primary"
              fontSize={12}
              align="right"
              className={classes.pointer}
              onClick={switchComp}
            >
              Already have an account? <span>Sign in</span>
            </Typography>
          </Box>
          {
            hasError && <Box my={2}>
              <Typography
                variant="body2"
                color="red"
                fontSize={12}
                align="center"
                className={classes.pointer}
                onClick={switchComp}
              >
                Oops, an error occurred! user already exists or check your network connection.
              </Typography>
            </Box>
          }
        </Box>
      </div>
    </div >
  );
};

export { SignUp as default };
