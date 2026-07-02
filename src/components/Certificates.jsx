import { FaLaptopCode, FaCode, FaServer, FaAngular, FaDatabase, FaBrain } from "react-icons/fa";

function Certificates() {
  const certificates = [
    {
      icon: <FaLaptopCode />,
      title: "AICTE EYGDS Internship Certificate",
      link: "/internship_certificate.pdf",
    },
    {
      icon: <FaAngular />,
      title: "Internship Program (COGNIFY)",
      link: "/COGNIFY INTERNSHIP_CERTIFICATE .pdf",
    },
    {
      icon: <FaServer />,
      title: "Full Stack Web Development",
      link: "/Full_Stack_Web_Development.pdf",
    },
    {
      icon: <FaBrain />,
      title: "Java Full Stack Development with AI Course",
      link: "/Java Full Stack Development with AI Course.pdf",
    },
    {
      icon: <FaCode />,
      title: "C++ Programming",
      link: "/C++.pdf",
    },
    {
      icon: <FaDatabase />,
      title: "NPTEL Big Data Computing (IIT Kanpur)",
      link: "/NPTEL CERTIFICATE.pdf",
    },
  ];

  return (
    <section className="certificates section" id="certificates">
      <div className="container">
        <h1 className="section-title">
          My <span className="text">Certificates</span>
        </h1>
        <p className="section-subtitle cert-subtitle">
          “My certification journey so far”
        </p>

        <div className="cert-grid">
          {certificates.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-icon">{cert.icon}</div>
              <h3 className="cert-title">{cert.title}</h3>

              <a
                href={cert.link}
                className="cert-btn"
                target="_blank"
                rel="noreferrer"
              >
                View <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
