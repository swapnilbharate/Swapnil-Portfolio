import profile from "../assets/images/Photo.png";
import { useEffect, useRef } from "react";

function Home() {
  const typingRef = useRef(null);

  useEffect(() => {
    const el = typingRef.current;
    if (!el) return;

    const text = "Java Full Stack Developer";
    let index = 0;
    let timeoutId;

    el.textContent = "";

    const type = () => {
      if (index < text.length) {
        el.textContent += text[index];
        index++;
        timeoutId = setTimeout(type, 110);
      }
    };

    type();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="home section" id="home">
      <div className="container home-inner">
        <div className="home-content">
          <span className="hero-eyebrow">Hello, It's Me</span>
          <h1>Swapnil Bharate</h1>

          <h3>
            <span>I'm a </span>
            <span ref={typingRef} className="text"></span>
          </h3>

          <p>
            Java Full Stack Developer with hands-on experience in Core Java, JDBC, Servlets, Spring Boot, React.js, HTML, CSS, Bootstrap, JavaScript, and MySQL. Passionate about building scalable web applications and solving real-world challenges.
          </p>

          <div className="hero-actions">
            <a
              href="/Swapnil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-box"
            >
              Get Resume
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/swapnilbharate"
              target="_blank"
              rel="noreferrer"
              className="social-btns"
              aria-label="GitHub"
            >
              <i className="bx bxl-github"></i>
            </a>

            <a
              href="http://www.linkedin.com/in/swapnil-bharate-b84408291"
              target="_blank"
              rel="noreferrer"
              className="social-btns"
              aria-label="LinkedIn"
            >
              <i className="bx bxl-linkedin"></i>
            </a>

            <a
              href="https://wa.me/919552966603"
              target="_blank"
              rel="noreferrer"
              className="social-btns"
              aria-label="WhatsApp"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
          </div>
        </div>

        <div className="home-img">
          <img src={profile} alt="profile" className="profile-pic" />
        </div>
      </div>
    </section>
  );
}

export default Home;
