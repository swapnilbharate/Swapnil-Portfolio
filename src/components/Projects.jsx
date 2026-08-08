import { useState } from "react";
import automart from "../assets/images/Automart.png";
import hirehub from "../assets/images/HireHub.png";
import aapliRecipe from "../assets/images/AapliRecipe.png";
import personalBook from "../assets/images/PersonalBookManager.png";
import mahaSpend from "../assets/images/MahaSpend.png";
import dashboardTemplate from "../assets/images/Dashbord Template.png";
import quizApp from "../assets/images/Quiz Application.png";
import simonSayGame from "../assets/images/simon Say game.png";
import gamingTemplate from "../assets/images/Gaming temp.png";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      img: automart,
      title: "AutoMart – Used Car Marketplace",
      category: "Java & Spring Boot",
      desc: "A responsive used car marketplace allowing users to search, filter, and explore pre-owned vehicles with role-based authentication, protected routing, wishlist, and car specs.",
      tags: ["React", "Context API", "React Router", "Bootstrap"],
      live: "https://automart-dryg.onrender.com",
      code: "https://github.com/swapnilbharate/AutoMart",
    },
    {
      img: hirehub,
      title: "HireHub – AI-Powered Job Portal",
      category: "Java & Spring Boot",
      desc: "An AI-powered full-stack career platform built with Spring Boot and Gemini AI, featuring Resume Analysis, AI Mock Interviews, Smart Job Recommendations, and Recruitment Dashboards.",
      tags: ["React", "Spring Boot", "Gemini AI", "PostgreSQL"],
      live: "https://hirehub-jobportal96.netlify.app",
      code: "https://github.com/swapnilbharate/Hirehub",
    },
    {
      img: aapliRecipe,
      title: "AapliRecipe – Recipe Sharing Platform",
      category: "MERN & React",
      desc: "A full-stack culinary recipe sharing platform featuring secure JWT authentication, recipe creation, bookmarking, personalized dashboards, and a modern responsive UI.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      live: "https://recipe-platform-frontend-u9bj.onrender.com",
      code: "https://github.com/swapnilbharate/Recipe-Sharing-Platform",
    },
    {
      img: personalBook,
      title: "Personal Book Manager",
      category: "MERN & React",
      desc: "A modern MERN & Next.js personal library manager featuring secure JWT authentication, reading status tracking, user dashboard, and responsive library management.",
      tags: ["Next.js", "React", "Express", "MongoDB"],
      live: "https://personal-book-manager-eosin-phi.vercel.app",
      code: "https://github.com/swapnilbharate/Personal-Book-Manager",
    },
    {
      img: mahaSpend,
      title: "MahaSpend – Smart Expense Tracker",
      category: "MERN & React",
      desc: "A mobile-responsive personal finance application to manage wealth and visualize budgets, featuring category-wise expense tracking, interactive analytics, and dark mode.",
      tags: ["React", "Vite", "JavaScript", "CSS3"],
      live: "https://smartexpensetracker-oajs.onrender.com",
      code: "https://github.com/swapnilbharate/SmartExpenseTracker",
    },
    {
      img: dashboardTemplate,
      title: "Business Hub – React Dashboard",
      category: "Frontend & Web",
      desc: "A responsive analytics dashboard template featuring modular sidebar navigation, dynamic layout cards, interactive data charts, and clean reusable UI components.",
      tags: ["React", "Recharts", "Bootstrap", "CSS3"],
      live: "https://react-dashboardtemplate.netlify.app",
      code: "https://github.com/swapnilbharate/React-Dashboard-Template",
    },
    {
      img: quizApp,
      title: "Quiz Application",
      category: "Frontend & Web",
      desc: "An interactive web application testing user knowledge with dynamic multiple-choice questions, timed quiz sessions, instant score calculation, and result summaries.",
      tags: ["JavaScript", "HTML5", "CSS3", "DOM API"],
      live: "https://swapnilbharate.github.io/Quiz-Application/",
      code: "https://github.com/swapnilbharate/Quiz-Application",
    },
    {
      img: simonSayGame,
      title: "Simon Says Game 🎮",
      category: "Frontend & Web",
      desc: "A fun memory-based web game testing pattern recognition with interactive color light sequences, sound effects, progressive difficulty levels, and game-over detection.",
      tags: ["JavaScript", "HTML5", "CSS3", "DOM API"],
      live: "https://swapnilbharate.github.io/simon-says-game/",
      code: "https://github.com/swapnilbharate/simon-says-game",
    },
    {
      img: gamingTemplate,
      title: "Frontend Gaming Template",
      category: "Frontend & Web",
      desc: "A dark-themed responsive gaming website template featuring hero banners, dynamic game cards, modern UI sections, and clean scalable frontend code.",
      tags: ["HTML5", "CSS3", "JavaScript", "UI Design"],
      live: "https://frontend-gaming-template.netlify.app",
      code: "https://github.com/swapnilbharate/Frontend-Gaming-Template",
    }
  ];

  const filterCategories = [
    { label: "All", count: projects.length },
    { label: "Java & Spring Boot", count: projects.filter(p => p.category === "Java & Spring Boot").length },
    { label: "MERN & React", count: projects.filter(p => p.category === "MERN & React").length },
    { label: "Frontend & Web", count: projects.filter(p => p.category === "Frontend & Web").length },
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h1 className="section-title">
          Latest <span className="text">Projects</span>
        </h1>
        <p className="section-subtitle projects-subtitle">
          "From learning to building — my project journey so far"
        </p>

        {/* Interactive Filter Tabs */}
        <div className="projects-filter-bar">
          {filterCategories.map((cat, i) => (
            <button
              key={i}
              className={`filter-btn ${activeFilter === cat.label ? "active" : ""}`}
              onClick={() => setActiveFilter(cat.label)}
            >
              {cat.label} <span className="filter-count">({cat.count})</span>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-image">
                {p.img ? (
                  <img src={p.img} alt={p.title} />
                ) : (
                  <div className="project-image-placeholder">
                    <span>{p.title.split("–")[0].trim()}</span>
                  </div>
                )}
              </div>

              <div className="project-content">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-description">{p.desc}</p>

                <div className="project-tags">
                  {p.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  {p.live && (
                    <a href={p.live} className="btn live" target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  )}
                  {p.code && (
                    <a href={p.code} className="btn code" target="_blank" rel="noreferrer">
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
