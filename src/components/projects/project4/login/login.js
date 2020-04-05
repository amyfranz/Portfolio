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

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
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
            Log In!
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="login-email-input">Email</InputLabel>
              <Input
                type="email"
                autoComplete="email"
                autoFocus
                id="login-email-input"
                onChange={e => this.userTyping("email", e)}
              ></Input>
            </FormControl>
            <FormControl required fullWidth margin="normal">
              <InputLabel htmlFor="login-password-input">Password</InputLabel>
              <Input
                type="password"
                id="login-password-input"
                onChange={e => this.userTyping("password", e)}
              ></Input>
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
              Incorrect login details.
            </Typography>
          ) : null}
          <Typography
            component="h5"
            variant="h6"
            className={classes.noAccountHeader}
          >
            Don't have an account?
          </Typography>
          <Link to="/signup" class={classes.signUpLink}>
            Sign Up!
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

      default:
        break;
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        () => {
          this.props.history.push("./dashboard");
        },
        err => {
          this.setState({ error: "Server error" });
          console.log(err);
        }
      );
    console.log(e);
  };
}

export default withStyles(styles)(login);
