import React, { useState } from "react";
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  FormControlLabel,
  Button,
  Checkbox,
  makeStyles,
  Card,
  CardContent,
} from "@material-ui/core";
import { LockRounded } from "@material-ui/icons";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import fire from "../helpers/db";
import { ToastContainer, toast } from "react-toastify";
import { BarLoader } from "react-spinners";

const Login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberme, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const override = `
        display: block;
        margin-left: 100px;
        border-color: red;
    `;
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleCheck = (event) => {
    setRememberMe(event.target.checked);
  };
  const handlerLogin = () => {
    setLoading(true);
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const { user } = response;
        const data = {
          userId: user.uid,
          email: user.email,
        };
        localStorage.setItem("user", JSON.stringify(data));
        const storage = localStorage.getItem("user");
        const loggedInUser = storage !== null ? JSON.parse(storage) : null;
        props.loggedIn(loggedInUser);
        setLoading(false);
      })
      .catch((error) => {
        toast.error('Внесените податоци не се точни!');
        setLoading(false);
      });
  };
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.loginLogo}>
        <img src="/images/valavino-logo.png" alt="" />
      </div>
      <Card className={classes.card}>
        <CardContent>
          <ToastContainer />
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockRounded />
            </Avatar>
            <Typography component="h1" variant="h5">
              Најави се
            </Typography>
            <ValidatorForm
              onSubmit={handlerLogin}
              onError={(errors) => {
                for (const err of errors) {
                  console.log(err.props.errorMessages[0]);
                }
              }}
              className={classes.form}
            >
              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email"
                onChange={handleEmail}
                name="email"
                value={email}
                validators={["required", "isEmail"]}
                errorMessages={["Полето е задолжително!", "E-mail не е валиден"]}
                autoComplete="off"
              />
              <TextValidator
                variant="outlined"
                fullWidth
                label="Password"
                onChange={handlePassword}
                name="password"
                type="password"
                value={password}
                validators={["required"]}
                errorMessages={["Полето е задолжително!"]}
                autoComplete="off"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value={rememberme}
                    onChange={(e) => handleCheck(e)}
                    color="primary"
                  />
                }
                label="Запомни ме"
              />
              {loading ? (
                <BarLoader
                  css={override}
                  size={50}
                  color={"#eb4034"}
                  loading={loading}
                />
              ) : (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                >
                  Најави се
                </Button>
              )}

              {/*<Grid container>
                <Grid item>
                  <Link
                    onClick={props.toggle}
                    className={classes.pointer}
                    variant="body2"
                  >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid> */}
            </ValidatorForm>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "darkred",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    background: "darkred",
    margin: theme.spacing(3, 0, 2),
    color: "#fff",
  },
  card: {
    marginTop: "60px",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "20px",
    border: "1px solid darkred",
  },
  pointer: {
    cursor: "pointer",
    color: "red",
  },
  loginLogo: {
    background: "darkred",
    padding: "1em",
    boxShadow: "-1px 13px 28px -16px rgba(0,0,0,0.75)",
    WebkitBoxShadow: "-1px 13px 28px -16px rgba(0,0,0,0.75)",
    MozBoxShadow: "-1px 13px 28px -16px rgba(0,0,0,0.75)",
    textAlign: "center",
  },
}));
export default Login;
