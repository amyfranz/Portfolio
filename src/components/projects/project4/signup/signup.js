import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
const firebase = require("firebase");

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      passConfirm: null,
      error: ""
    };
  }
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form onSubmit={this.submitSignup} className={classes.form}>
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="signup-email-input">Email:</InputLabel>
              <Input
                type="email"
                autoComplete="email"
                autoFocus
                id="signup-email-input"
                onChange={e => this.userTyping("email", e)}
              />
            </FormControl>
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="signup-password-input">Password:</InputLabel>
              <Input
                type="password"
                id="signup-password-input"
                onChange={e => this.userTyping("password", e)}
              />
            </FormControl>
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="signup-password-confirmation-input">
                Confirm Password:
              </InputLabel>
              <Input
                type="password"
                id="signup-password-confirmation-input"
                onChange={e => this.userTyping("passConfirm", e)}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
          {this.state.error ? (
            <Typography
              component="h5"
              variant="h6"
              className={classes.errorText}
            >
              {this.state.error}
            </Typography>
          ) : null}
          <Typography
            component="h5"
            variant="h6"
            className={classes.hasAccountHeader}
          >
            Already have an account?
          </Typography>
          <Link className={classes.logInLink} to="/login">
            Log In!
          </Link>
        </Paper>
      </main>
    );
  }

  userTyping = (type, e) => {
    switch (type) {
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "password":
        this.setState({ password: e.target.value });
        break;
      case "passConfirm":
        this.setState({ passConfirm: e.target.value });
        break;

      default:
        break;
    }
  };

  formIsValid = () => this.state.password === this.state.passConfirm;

  submitSignup = e => {
    e.preventDefault();
    if (!this.formIsValid()) {
      this.setState({ error: "Passwords do not match." });
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        authRes => {
          const userObj = {
            email: authRes.user.email
          };
          firebase
            .firestore()
            .collection("users")
            .doc(this.state.email)
            .set(userObj)
            .then(
              () => {
                this.props.history.push("/dashboard");
              },
              dbErr => {
                console.log("Failed to add user to the database: ", dbErr);
                this.setState({ error: "Failed to add user" });
              }
            );
        },
        authErr => {
          console.log("Failed to create user: ", authErr);
          this.setState({ error: "Failed to add user" });
        }
      );
  };
}
export default withStyles(styles)(SignUp);
