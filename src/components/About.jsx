import { FaUserCheck, FaBriefcase, FaGraduationCap } from "react-icons/fa";

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h1 className="section-title">
          About <span className="text">Me</span>
        </h1>
        <p className="section-subtitle about-subtitle">
          "Passionate Java Full Stack Developer building scalable web applications"
        </p>

        <div className="about-grid">
          {/* Card 1: Professional Overview */}
          <div className="about-col-card">
            <div className="about-card-header">
              <div className="about-card-icon">
                <FaUserCheck />
              </div>
              <div>
                <h3 className="about-card-title">Professional Overview</h3>
                <span className="about-card-role">Java Full Stack Developer</span>
              </div>
            </div>

            <p className="about-card-desc" style={{ fontSize: "1.45rem", lineHeight: "1.85" }}>
              Java Full Stack Developer with hands-on experience in Core Java, JDBC, Servlets, Hibernate, Spring Boot, React.js, HTML, CSS, Bootstrap, JavaScript, and MySQL. Strong foundation in Object-Oriented Programming (OOP), MVC Architecture, and database management, writing clean code and building responsive web applications.
            </p>
          </div>

          {/* Card 2: Experience */}
          <div className="about-col-card">
            <div className="about-card-header">
              <div className="about-card-icon">
                <FaBriefcase />
              </div>
              <div>
                <h3 className="about-card-title">Experience</h3>
                <span className="about-card-role">Internships & Hands-on Work</span>
              </div>
            </div>

            <div className="about-timeline-list">
              <div className="about-timeline-item">
                <div className="item-header">
                  <h4>Full Stack Intern</h4>
                  <span className="item-date">Jan 2026 – Jun 2026</span>
                </div>
                <p className="item-org">Envision Computer Training Institute, Pune</p>
                <p className="item-desc">
                  Developed Java-based full-stack applications using Core Java, JDBC, Servlets, and Spring Boot applying OOP and MVC architecture.
                </p>
              </div>

              <div className="about-timeline-item">
                <div className="item-header">
                  <h4>MERN Stack Intern</h4>
                  <span className="item-date">Mar 2025 – Apr 2025</span>
                </div>
                <p className="item-org">EY Global Delivery Services (EY GDS)</p>
                <p className="item-desc">
                  Developed full-stack web applications using MERN stack, designed responsive UIs, and integrated RESTful APIs for efficient data communication.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Education */}
          <div className="about-col-card">
            <div className="about-card-header">
              <div className="about-card-icon">
                <FaGraduationCap />
              </div>
              <div>
                <h3 className="about-card-title">Education</h3>
                <span className="about-card-role">Academic Background</span>
              </div>
            </div>

            <div className="about-edu-list">
              <div className="about-edu-item">
                <div className="item-header">
                  <h4>B.E. Computer Engineering</h4>
                  <span className="cgpa-badge">CGPA: 7.96</span>
                </div>
                <p className="item-org">Trinity College of Engineering and Research, Pune</p>
                <p className="item-sub">2022 – 2026</p>
              </div>

              <div className="about-edu-item">
                <div className="item-header">
                  <h4>Higher Secondary Education (HSC)</h4>
                  <span className="score-badge">61%</span>
                </div>
                <p className="item-org">Dadapatil Mahavidyalaya, Karjat</p>
                <p className="item-sub">2021 – 2022</p>
              </div>

              <div className="about-edu-item">
                <div className="item-header">
                  <h4>Secondary Education (SSC)</h4>
                  <span className="score-badge">86.80%</span>
                </div>
                <p className="item-org">Shree Ravishankar Vidyamandir, Karjat</p>
                <p className="item-sub">2019 – 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
