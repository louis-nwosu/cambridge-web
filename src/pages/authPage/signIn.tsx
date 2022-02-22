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

import { logIn } from "../../store/reducers/authReducer/actionCreators";
import bgImage from '../../assets/auth.jpg'
import "../../css/login.css";

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

export const SignIn: FC<{ switchComp: () => void }> = ({ switchComp }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const isLoading = useSelector((state: any) => state.auth.isLoading)
  const hasError = useSelector((state: any) => state.auth.hasError)

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div className={classes.body}>
      <div className="login-container">
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
          <TextField
            variant="standard"
            placeholder="Email Address"
            fullWidth
            color="primary"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
        <Box>
          <Typography variant="body2" color="primary">
            Can't access your account?
          </Typography>
        </Box>
        <Box my={1}>
          <Button fullWidth color="primary" variant="contained" onClick={() => {
            dispatch(logIn({ email, password }, navigate))
          }}>
            {isLoading ? 'Loading...' : 'Sign in'}
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
              Don't have an account? <span>Sign up</span>
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
                Oops, an error occurred! username or password is incorrect! also, check your network connection.
              </Typography>
            </Box>
          }
        </Box>
      </div>
    </div>
  );
};

export { SignIn as default };
