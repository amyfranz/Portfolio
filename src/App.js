import React, { Component } from "react";
import NavBar from "./components/navBar/navBar";
import Home from "./components/home/home";
import AboutMe from "./components/aboutMe/aboutMe";
import Portfolio from "./components/portfolio/portfolio";
import Blog from "./components/blog/blog";
import ContactMe from "./components/contactMe/contactMe";
import Footer from "./components/footer/footer";
import Axios from "axios";

class App extends Component {
  state = {
    nameEmailForm: "",
    emailEmailForm: "",
    subjectEmailForm: "",
    messageEmailForm: "",
  };
  render() {
    return (
      <div className="App">
        <NavBar /> <Home /> <Portfolio /> <AboutMe /> <Blog />{" "}
        <ContactMe
          handleEmailFormChange={this.handleEmailFormChange}
          // handleEmailFormSubmission={this.handleEmailFormSubmission}
        />
        <Footer />
      </div>
    );
  }
  handleEmailFormChange = (e) => {
    const key = `${e.target.name}EmailForm`;
    const value = e.target.value;
    const obj = {};
    obj[key] = value;
    this.setState(obj);
  };
  // async handleEmailFormSubmission(e){
  //   e.preventDefault();
  //   const {
  //     nameEmailForm,
  //     emailEmailForm,
  //     subjectEmailForm,
  //     messageEmailForm,
  //   } = this.state;
  //   const form = await Axios.post('/api/form', {
  //     name: nameEmailForm,
  //     email: emailEmailForm,
  //     subject: subjectEmailForm,
  //     message: messageEmailForm
  //   })
  //};
}
export default App;
