import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import js from "../assets/icons/javascript.svg";
import java from "../assets/icons/java-light.svg";
import spring from "../assets/icons/spring.svg";
import mysql from "../assets/icons/mysql-light.svg";
import hibernate from "../assets/icons/hibernate-light.svg";
import git from "../assets/icons/git.svg";
import github from "../assets/icons/github-light.svg";
import postman from "../assets/icons/postman.svg";
import angular from "../assets/icons/angular.png"
import react from "../assets/icons/react.png"
import bootstrap from "../assets/icons/bootstrap.png"
import redux from "../assets/icons/redux.png"

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h1>
          My <span className="text">Skills</span>
        </h1>
        <p className="skills-subtitle">"I believe in learning deeply and building practically"</p>

        <div className="skill-container">
          {[
            { img: react, name: "React"},
            { img: js, name: "JavaScript" },
            { img: bootstrap, name: "Bootstrap"},
            { img: redux, name: "Redux"},
            { img: html, name: "HTML" },
            { img: css, name: "CSS" },
            { img: angular, name: "Angular"},
            { img: java, name: "Java" },
            { img: spring, name: "Spring Boot" },
            { img: mysql, name: "MySQL" },
            { img: hibernate, name: "Hibernate" },
            { img: git, name: "Git" },
            { img: github, name: "GitHub" },
            { img: postman, name: "Postman" }
            
          ].map((skill, index) => (
            <div className="grid-cell" key={index}>
              <img src={skill.img} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
