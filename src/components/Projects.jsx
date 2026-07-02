import learnsphere from "../assets/images/LearnSphere.png";
import automart from "../assets/images/Automart.png";
import dashboardTemplate from "../assets/images/Dashbord Template.png";
import quizApp from "../assets/images/Quiz Application.png";
import simonSayGame from "../assets/images/simon Say game.png";
import gamingTemplate from "../assets/images/Gaming temp.png";

function Projects() {
  const projects = [
    {
      img: learnsphere,
      title: "LearnSphere: Adaptive Learning Platform",
      desc: "A MERN stack web application delivering personalized learning content. Built dynamic dashboards with progress tracking, secure authentication, role-based access, and integrated an AI-powered context-aware chatbot (NLP + RAG).",
      tags: ["React", "Node.js", "Express", "MongoDB", "NLP", "RAG"],
      live: "https://learnsphere-ai-k1jv.onrender.com",
      code: null,
    },
    {
      img: automart,
      title: "AutoMart: Used Car Marketplace",
      desc: "A responsive car marketplace enabling users to search, filter, and explore second-hand cars. Features role-based Admin/User authentication, protected routing, wishlist integration, and specifications for listings.",
      tags: ["React", "Context API", "React Router", "Bootstrap", "CSS"],
      live: null,
      code: "https://github.com/swapnilbharate/AutoMart",
    },
    {
      img: dashboardTemplate,
      title: "Business Analytics Dashboard",
      desc: "A responsive dashboard featuring modular sidebar navigation, dynamic layout cards, and data visualization. Built with reusable and scalable components to render statistics, charts, and data tables.",
      tags: ["React", "JavaScript", "Recharts", "Bootstrap", "CSS"],
      live: "https://react-dashboardtemplate.netlify.app",
      code: "https://github.com/swapnilbharate/React-Dashboard-Template",
    },
    {
      img: quizApp,
      title: "Quiz Application",
      desc: "An interactive quiz application that tests knowledge with multiple-choice questions. Features score tracking, timed questions, and a results summary at the end.",
      tags: ["HTML", "CSS", "JavaScript"],
      live: "https://swapnilbharate.github.io/Quiz-Application/",
      code: "https://github.com/swapnilbharate/Quiz-Application",
    },
    {
      img: simonSayGame,
      title: "Simon Says Game 🎮",
      desc: "A fun and interactive memory-based game with color pattern challenges. Features increasing difficulty with levels, sound effects for each button, game over detection, and restart functionality.",
      tags: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
      live: "https://swapnilbharate.github.io/simon-says-game/",
      code: "https://github.com/swapnilbharate/simon-says-game",
    },
    {
      img: gamingTemplate,
      title: "Frontend Gaming Template",
      desc: "A visually stunning frontend gaming website template with modern UI design. Features responsive layouts, dynamic sections, and an immersive gaming-themed aesthetic built with clean, scalable code.",
      tags: ["HTML", "CSS", "JavaScript"],
      live: "https://frontend-gaming-template.netlify.app",
      code: "https://github.com/swapnilbharate/Frontend-Gaming-Template",
    }
  ];

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h1 className="section-title">
          Latest <span className="text">Projects</span>
        </h1>
        <p className="section-subtitle projects-subtitle">
          "From learning to building — my project journey so far"
        </p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-image">
                <img src={p.img} alt={p.title} />
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
