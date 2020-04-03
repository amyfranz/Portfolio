import React from "react";
import NavBar from "./components/navBar/navBar";
import Home from "./components/home/home";
import AboutMe from "./components/aboutMe/aboutMe";
import Portfolio from "./components/portfolio/portfolio";
import Blog from "./components/blog/blog";
import ContactMe from "./components/contactMe/contactMe";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <NavBar /> <Home /> <Portfolio /> <AboutMe /> <Blog /> <ContactMe />
      <Footer />
    </div>
  );
}
export default App;
