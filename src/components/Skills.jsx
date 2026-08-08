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
import react from "../assets/icons/react.png";
import bootstrap from "../assets/icons/bootstrap.png";
import redux from "../assets/icons/redux.png";
import { FaServer, FaCode, FaTools, FaLaptopCode, FaPlug, FaTerminal, FaDatabase } from "react-icons/fa";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      skills: [
        { img: react, name: "React.js" },
        { img: js, name: "JavaScript" },
        { img: redux, name: "Redux" },
        { img: bootstrap, name: "Bootstrap" },
        { img: html, name: "HTML5" },
        { img: css, name: "CSS3" },
      ],
    },
    {
      title: "Backend & Database",
      icon: <FaServer />,
      skills: [
        { img: java, name: "Java" },
        { img: spring, name: "Spring Boot" },
        { img: hibernate, name: "Hibernate" },
        { img: mysql, name: "MySQL" },
        { icon: <FaDatabase />, name: "JDBC" },
        { icon: <FaPlug />, name: "Servlets" },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools />,
      skills: [
        { img: git, name: "Git" },
        { img: github, name: "GitHub" },
        { img: postman, name: "Postman" },
        { icon: <FaLaptopCode />, name: "VS Code" },
        { icon: <FaTerminal />, name: "Eclipse" },
        { icon: <FaPlug />, name: "REST APIs" },
      ],
    },
  ];

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h1 className="section-title">
          My <span className="text">Skills</span>
        </h1>
        <p className="skills-subtitle">"Categorized expertise built through practical applications"</p>

        <div className="skills-category-grid">
          {skillCategories.map((cat, catIdx) => (
            <div className="skills-category-card" key={catIdx}>
              <div className="skills-cat-header">
                <div className="cat-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
              </div>

              <div className="skill-item-grid">
                {cat.skills.map((skill, index) => (
                  <div className="skill-pill-cell" key={index}>
                    {skill.img ? (
                      <img src={skill.img} alt={skill.name} />
                    ) : (
                      <span className="skill-react-icon">{skill.icon}</span>
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
