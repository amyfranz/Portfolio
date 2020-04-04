import React, { Component } from "react";
import NavBar from "./components/navBar/navBar";
import Home from "./components/home/home";
import AboutMe from "./components/aboutMe/aboutMe";
import Portfolio from "./components/portfolio/portfolio";
import Blog from "./components/blog/blog";
import ContactMe from "./components/contactMe/contactMe";
import Footer from "./components/footer/footer";
import Axios from "axios";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

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
          handleEmailFormSubmission={this.handleEmailFormSubmission}
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

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };
}
export default App;
