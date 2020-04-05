import React, { Component } from "react";
import NavBar from "./components/navBar/navBar";
import Home from "./components/home/home";
import AboutMe from "./components/aboutMe/aboutMe";
import Portfolio from "./components/portfolio/portfolio";
import Blog from "./components/blog/blog";
import ContactMe from "./components/contactMe/contactMe";
import Footer from "./components/footer/footer";
import "./styles1.module.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />{" "}
        <main>
          <Home /> <Portfolio /> <AboutMe /> {/* <Blog /> */} <ContactMe />
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
