import React from "react";
import styles from "../../styles1.module.css";

export default function aboutMe() {
  return (
    <div className={styles.aboutMe} id="aboutMe">
      <div className={styles.aboutMeInfo}>
        <h1>Hi, I am Amy.</h1>
        <h2>
          A London based full-stack developer specialising in React and Rails.
        </h2>
        <h2>A Bit About Me</h2>
        <p className={styles.alignRight}>
          After being introduced to coding from a young age, I have always had a
          passion for it. I first started properly coding in school where I was
          taught to code in <i>Delphi</i>, a language derived from pascal. I
          really enjoyed coding but like many, I had the misconception that
          being a programmer was an “unsociable job”, so I decided to study
          branding, a good mix of design, strategy and logic.
        </p>
        <p className={styles.alignLeft}>
          During this time, I started working for tech startup companies,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.pragmattica.co.za/"
          >
            Pragmattica
          </a>{" "}
          and{" "}
          <a
            href="https://ourhood.co.za/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OurHood
          </a>
          , doing marketing. This is where I became passionate about
          entrepreneurship and helping startups. I decided to start my own
          company that provided startups with branding and creative assets. I
          soon, however, hit a big roadblock, I needed to create a website that
          would automate certain jobs like connecting a company with a student.
          So I took a big risk and moved from South Africa to Paris where I took
          part in a month long Bootcamp at a school called{" "}
          <a
            href="https://www.42.us.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            42
          </a>
          .
        </p>
        <p className={styles.alignRight}>
          During this very intensive month, I learnt to code in <i>C++</i> and
          realised that working in tech is what I wanted to do. After this
          course, I moved to London with the goal of doing another Bootcamp so I
          could become a web-developer. While I was settling down in London, I
          worked for a tech company,{" "}
          <a href="https://pynk.io" target="_blank" rel="noopener noreferrer">
            Pynk
          </a>
          , running a podcast on new technologies and startups. I started a
          software-engineering course at{" "}
          <a
            href="https://flatironschool.com/career-courses/coding-bootcamp/london"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flatiron
          </a>{" "}
          in January 2020. During this time I have learnt <i>Ruby</i>,{" "}
          <i>Rails</i>, <i>Javascript</i>, <i>React</i> and <i>Redux</i>. I have
          really enjoyed the course and it has really solidified my passion for
          coding.
        </p>
        <p className={styles.alignLeft}>
          I am also currently studying{" "}
          <a
            href="https://www.ducere.edu.au/"
            target="_blank"
            rel="noopener noreferrer"
          >
            management and entrepreneurship online part-time
          </a>{" "}
          with a goal of mine to start my own tech research and consultancy
          company.
        </p>
      </div>
      <div className={styles.aboutMeCTA}>
        <h2>
          You can get my{" "}
          <a
            href="https://docs.google.com/document/d/1bis_z1MODpeD1PmyuO0Qrufkz81Gn0ii9qvFKrGlEVY/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>{" "}
          here, better yet, why not <a href="#contactMe">get in touch</a>?
        </h2>
      </div>
    </div>
  );
}
