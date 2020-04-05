import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import NotificationImportant from "@material-ui/icons/NotificationImportant";

class chatList extends Component {
  render() {
    const { classes } = this.props;
    if (this.props.chats.length > 0) {
      return (
        <div className={classes.root}>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            className={classes.newChatBtn}
            onClick={this.newChat}
          >
            New Message
          </Button>
          <List>
            {this.props.chats.map((chat, index) => {
              return (
                <div key={index}>
                  <ListItem
                    onClick={e => this.selectChatFn(index)}
                    className={classes.listItem}
                    selected={this.props.selectedChatIndex === index}
                    alignItems="flex-start"
                  >
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp">
                        {
                          chat.users.filter(
                            user => user !== this.props.email
                          )[0][0]
                        }
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        chat.users.filter(
                          user => user !== this.props.email
                        )[0]
                      }
                      secondary={
                        <React.Fragment>
                          <Typography component="span" color="textPrimary">
                            {chat.messages[
                              chat.messages.length - 1
                            ].message.substring(0, 30)}
                          </Typography>
                        </React.Fragment>
                      }
                    ></ListItemText>
                    {chat.receiverHasRead === false &&
                    !this.userIsSender(chat) ? (
                      <ListItemIcon>
                        <NotificationImportant
                          className={classes.unreadMessage}
                        />
                      </ListItemIcon>
                    ) : null}
                  </ListItem>
                  <Divider />
                </div>
              );
            })}
          </List>
        </div>
      );
    } else {
      return (
        <div className={classes.root}>
          <Button
            variant="contained"
            fullWidth
            onClick={this.newChat}
            className={classes.newChatBtn}
            color="primary"
          >
            New Message
          </Button>
          <List></List>
        </div>
      );
    }
  }
  newChat = () => {
    this.props.newChatBtnClick();
  };
  selectChatFn = index => {
    this.props.selectChat(index);
  };
  userIsSender = chat => {
    return chat.messages[chat.messages.length - 1].sender === this.props.email;
  };
}
export default withStyles(styles)(chatList);
