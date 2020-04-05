import React, { Component } from "react";
import ImageWeather from "../../../src/assets/WeatherApp.png";
import ImageMovie from "../../../src/assets/Movie.png";
import ImageRecipe from "../../../src/assets/Recipe.png";
import ImageMessenger from "../../../src/assets/Messenger.png";
import ImageJs30 from "../../../src/assets/JS30.png";
import styles from "../../styles1.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class Portfolio extends Component {
  render() {
    const items = [
      {
        name: "item1",
        url: ImageWeather,
        title: "Weather App",
        lang: "React",
        codeSrc: "https://github.com/amyfranz/weather_app",
        projectSrc: "/project1",
      },
      {
        name: "item2",
        url: ImageMovie,
        title: "Movie Finder",
        lang: "React",
        codeSrc: "https://github.com/amyfranz/MovieSearch",
        projectSrc: "/project2",
      },
      {
        name: "item3",
        url: ImageRecipe,
        title: "Recipe Search",
        lang: "React",
        codeSrc: "https://github.com/amyfranz/recipe-finder",
        projectSrc: "/project3",
      },
      {
        name: "item4",
        url: ImageMessenger,
        title: "Messenger",
        lang: "React",
        codeSrc: "https://github.com/amyfranz/Messenger-App-React",
        projectSrc: "/project4/login",
      },
      {
        name: "item5",
        url: ImageJs30,
        title: "JS 30 Challenge",
        lang: "Java Script",
        codeSrc: "https://github.com/amyfranz/JavaScript30",
        projectSrc: "https://codepen.io/collection/nqVMBL",
      },
    ];

    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
    };
    return (
      <div className={styles.myProjects}>
        <div className={styles.myProjectsTitle}>
          <h1>My Projects</h1>
        </div>
        <div className={styles.projects} id="portfolio">
          <Slider {...settings} className={styles.slides}>
            {items.map((item, index) => {
              console.log(item);
              return (
                <div key={index} className={styles.carCard}>
                  <img className={styles.carImg} src={item.url} alt=""></img>
                  <div className={styles.carText}>
                    <h1>{item.title}</h1>
                    <h2>{item.lang}</h2>
                    <div className={styles.carLinks}>
                      <a
                        href={item.projectSrc}
                        alt="code"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                      <a
                        href={item.codeSrc}
                        alt="code"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
