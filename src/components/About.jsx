function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-card">
          {/* Left Column: Personal info & description */}
          <div className="about-copy">
            <h1 className="about-title">
              About <span className="text">Me</span>
            </h1>

            <h4 className="about-role">Java Full Stack Developer</h4>

            <p className="about-desc">
              Java Full Stack Developer with hands-on experience in Core Java, JDBC, Servlets, Hibernate, Spring Boot, React.js, HTML, CSS, Bootstrap, JavaScript, and MySQL. Strong foundation in Object-Oriented Programming (OOP), MVC Architecture, and database management, with experience in developing responsive web applications, writing clean and reusable code, and debugging application issues.
            </p>
          </div>

          {/* Right Column: Experience & Education */}
          <div className="about-details">
            <div className="about-detail-card">
              <h3>Experience</h3>
              
              <div style={{ marginBottom: "1.6rem" }}>
                <p style={{ color: "var(--text)", fontWeight: "600", fontSize: "1.5rem" }}>
                  Full Stack Intern
                </p>
                <p style={{ color: "var(--accent)", fontSize: "1.35rem", fontWeight: "500", marginTop: "-0.2rem" }}>
                  Envision Computer Training Institute, Pune
                </p>
                <p style={{ fontSize: "1.25rem", color: "var(--text-soft)", marginBottom: "0.4rem" }}>
                  Jan 2026 – Jun 2026 | Pune
                </p>
                <p style={{ fontSize: "1.3rem", lineHeight: "1.5", color: "var(--text-soft)" }}>
                  Developed Java-based full-stack applications using Core Java, JDBC, Servlets, and Spring Boot. Applied OOP and MVC architecture.
                </p>
              </div>

              <div>
                <p style={{ color: "var(--text)", fontWeight: "600", fontSize: "1.5rem" }}>
                  MERN Stack Intern
                </p>
                <p style={{ color: "var(--accent)", fontSize: "1.35rem", fontWeight: "500", marginTop: "-0.2rem" }}>
                  EY Global Delivery Services (EY GDS)
                </p>
                <p style={{ fontSize: "1.25rem", color: "var(--text-soft)", marginBottom: "0.4rem" }}>
                  Mar 2025 – Apr 2025 | Remote
                </p>
                <p style={{ fontSize: "1.3rem", lineHeight: "1.5", color: "var(--text-soft)" }}>
                  Developed full-stack web applications using MERN stack, designed responsive UIs, and integrated secure RESTful APIs.
                </p>
              </div>
            </div>

            <div className="about-detail-card">
              <h3>Education</h3>
              <p style={{ color: "var(--text)", fontWeight: "600", fontSize: "1.6rem" }}>
                Bachelor of Engineering (B.E.)
              </p>
              <p style={{ color: "var(--accent)", fontSize: "1.4rem", fontWeight: "500", marginTop: "-0.4rem" }}>
                Trinity College of Engineering and Research, Pune
              </p>
              <p style={{ fontSize: "1.3rem", color: "var(--text-soft)" }}>
                Computer Engineering | 2022 – 2026
              </p>
              <p style={{ fontSize: "1.4rem", lineHeight: "1.6" }}>
                <strong>CGPA: 7.96</strong> <br />
                HSC: Dadapatil Mahavidyalaya, Karjat (61%) <br />
                SSC: Shree Ravishankar Vidyamandir (86.80%)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
