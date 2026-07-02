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

            <h4 className="about-role">Full Stack Developer</h4>

            <p className="about-desc">
              Web Developer with hands-on experience in building responsive web applications using React, JavaScript, Java, and SQL. Proficient in frontend technologies like Redux, Bootstrap, and backend development with RESTful APIs. Completed a MERN Stack internship at EY Global Delivery Services (EY GDS), where I built full-stack applications and optimized app performance. Passionate about modern web technologies and turning ideas into real-world digital solutions.
            </p>
          </div>

          {/* Right Column: Experience & Education */}
          <div className="about-details">
            <div className="about-detail-card">
              <h3>Experience</h3>
              <p style={{ color: "var(--text)", fontWeight: "600", fontSize: "1.6rem" }}>
                MERN Stack Intern
              </p>
              <p style={{ color: "var(--accent)", fontSize: "1.4rem", fontWeight: "500", marginTop: "-0.4rem" }}>
                EY Global Delivery Services (EY GDS)
              </p>
              <p style={{ fontSize: "1.3rem", color: "var(--text-soft)" }}>
                Mar 2025 – Apr 2025 | Remote
              </p>
              <p style={{ fontSize: "1.4rem", lineHeight: "1.6" }}>
                Developed full-stack web applications, designed responsive UIs, integrated secure RESTful APIs, and optimized app performance.
              </p>
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
                Computer Engineering | Expected 2026
              </p>
              <p style={{ fontSize: "1.4rem", lineHeight: "1.6" }}>
                <strong>CGPA: 9.35</strong> <br />
                HSC: Dadapatil Mahavidyalaya (61%) <br />
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
