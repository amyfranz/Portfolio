import React, { Component } from "react";
import ChatList from "../chatList/chatList";
import ChatView from "../chatView/chatView";
import ChatTextBox from "../chatTextBox/chatTextBox";
import NewChatForm from "../newChat/newChat";
import styles from "./styles";
import { Button, withStyles } from "@material-ui/core";
const firebase = require("firebase");

class dashboard extends Component {
  constructor() {
    super();
    this.state = {
      selectedChat: null,
      newChatFormVisible: null,
      email: null,
      chats: []
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <ChatList
          history={this.props.history}
          newChatBtnClick={this.newChatBtnClick}
          selectChat={this.selectChat}
          chats={this.state.chats}
          email={this.state.email}
          selectedChatIndex={this.state.selectedChat}
        />
        {this.state.newChatFormVisible ? null : (
          <ChatView
            chat={this.state.chats[this.state.selectedChat]}
            user={this.state.email}
          />
        )}
        {this.state.selectedChat !== null && !this.state.newChatFormVisible ? (
          <ChatTextBox
            submitMessage={this.submitMessage}
            hasRead={this.messageRead}
          />
        ) : null}
        {this.state.newChatFormVisible ? (
          <NewChatForm
            goToChat={this.goToChat}
            newChatSubmitFn={this.chatSubmit}
          />
        ) : null}
        <Button className={classes.signOutBtn} onClick={this.signOut}>
          Sign Out
        </Button>
      </div>
    );
  }

  goToChat = async (docKey, message) => {
    const UserInChat = docKey.split(":");
    const chat = this.state.chats.find(chat =>
      UserInChat.every(user => chat.users.includes(user))
    );
    this.setState({ newChatFormVisible: false });
    await this.selectChat(this.state.chats.indexOf(chat));
    this.submitMessage(message);
  };

  chatSubmit = async chatObj => {
    const docKey = this.buildDocKey(chatObj.sendTo);
    await firebase
      .firestore()
      .collection("chats")
      .doc(docKey)
      .set({
        receiverHasRead: false,
        users: [this.state.email, chatObj.sendTo],
        messages: [
          {
            message: chatObj.message,
            sender: this.state.email
          }
        ]
      });
    this.setState({ newChatFormVisible: false });
    this.selectChat(this.state.chats.length - 1);
  };

  signOut = () => firebase.auth().signOut();

  selectChat = async chatIndex => {
    await this.setState({ selectedChat: chatIndex, newChatFormVisible: false });
    this.messageRead();
  };

  submitMessage = msg => {
    const docKey = this.buildDocKey(
      this.state.chats[this.state.selectedChat].users.filter(
        usr => usr !== this.state.email
      )[0]
    );
    firebase
      .firestore()
      .collection("chats")
      .doc(docKey)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          sender: this.state.email,
          message: msg,
          timestamp: Date.now()
        }),
        receiverHasRead: false
      });
  };

  buildDocKey = friend => [this.state.email, friend].sort().join(":");

  newChatBtnClick = () => {
    this.setState({ newChatFormVisible: true, selectChat: null });
  };

  messageRead = () => {
    const docKey = this.buildDocKey(
      this.state.chats[this.state.selectedChat].users.filter(
        user => user !== this.state.email
      )[0]
    );
    if (this.clickedChatWhereNotSender(this.state.selectedChat)) {
      firebase
        .firestore()
        .collection("chats")
        .doc(docKey)
        .update({ receiverHasRead: true });
    }
  };

  clickedChatWhereNotSender = index =>
    this.state.chats[index].messages[
      this.state.chats[index].messages.length - 1
    ].sender !== this.state.email;

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(async _user =>
      _user
        ? await firebase
            .firestore()
            .collection("chats")
            .where("users", "array-contains", _user.email)
            .onSnapshot(async res => {
              const chats = res.docs.map(_doc => _doc.data());
              await this.setState({
                email: _user.email,
                chats: chats
              });
            })
        : this.props.history.push("/login")
    );
  };
}
export default withStyles(styles)(dashboard);
