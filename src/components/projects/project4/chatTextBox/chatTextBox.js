import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Send from "@material-ui/icons/Send";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

class chatTextBox extends Component {
  constructor() {
    super();
    this.state = {
      chatText: ""
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.chatTextBoxContainer}>
        <TextField
          placeholder="new message"
          onKeyUp={this.userTyping}
          id="chatBox"
          className={classes.chatTextBox}
          onFocus={this.userClickedInput}
        ></TextField>
        <Send onClick={this.submitMessage} className={classes.sendBtn}></Send>
      </div>
    );
  }
  userTyping = e => {
    e.key === 13
      ? this.submitMessage()
      : this.setState({ chatText: e.target.value });
  };
  textValid = txt => {
    return txt && txt.replace(/\s/g, " ").length;
  };
  userClickedInput = e => {
    this.props.hasRead();
  };
  submitMessage = e => {
    if (this.textValid(this.state.chatText)) {
      this.props.submitMessage(this.state.chatText);
      document.querySelector("#chatBox").value = "";
    }
  };
}
export default withStyles(styles)(chatTextBox);
