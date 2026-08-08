import { useState } from "react";
import { FaLaptopCode, FaCode, FaServer, FaAngular, FaDatabase, FaBrain, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      icon: <FaLaptopCode />,
      title: "AICTE EYGDS Internship Certificate",
      issuer: "EY GDS & AICTE",
      badgeClass: "badge-ey",
      link: "/internship_certificate.pdf",
    },
    {
      icon: <FaAngular />,
      title: "Internship Program (COGNIFY)",
      issuer: "COGNIFYZ TECH",
      badgeClass: "badge-cognify",
      link: "/COGNIFY INTERNSHIP_CERTIFICATE .pdf",
    },
    {
      icon: <FaServer />,
      title: "Full Stack Web Development",
      issuer: "CERTIFIED",
      badgeClass: "badge-web",
      link: "/Full_Stack_Web_Development.pdf",
    },
    {
      icon: <FaBrain />,
      title: "Java Full Stack Development with AI Course",
      issuer: "FULL STACK AI",
      badgeClass: "badge-ai",
      link: "/Java Full Stack Development with AI Course.pdf",
    },
    {
      icon: <FaCode />,
      title: "C++ Programming Certification",
      issuer: "PROGRAMMING",
      badgeClass: "badge-cpp",
      link: "/C++.pdf",
    },
    {
      icon: <FaDatabase />,
      title: "NPTEL Big Data Computing (IIT Kanpur)",
      issuer: "IIT KANPUR (80%)",
      badgeClass: "badge-nptel",
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
          “Verified certifications and practical achievements”
        </p>

        <div className="cert-grid">
          {certificates.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-card-top">
                <div className="cert-icon">{cert.icon}</div>
                <span className={`issuer-tag ${cert.badgeClass}`}>{cert.issuer}</span>
              </div>

              <h3 className="cert-title">{cert.title}</h3>

              <div className="cert-card-actions">
                <button
                  className="cert-btn modal-trigger-btn"
                  onClick={() => setSelectedCert(cert)}
                >
                  Quick Preview
                </button>
                <a
                  href={cert.link}
                  className="cert-btn external-btn"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open PDF"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Preview Lightbox Modal */}
      {selectedCert && (
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <h3>{selectedCert.title}</h3>
              <button
                className="cert-modal-close"
                onClick={() => setSelectedCert(null)}
              >
                <FaTimes />
              </button>
            </div>

            <div className="cert-modal-body">
              <iframe
                src={selectedCert.link}
                title={selectedCert.title}
                width="100%"
                height="500px"
                style={{ border: "none", borderRadius: "1rem" }}
              ></iframe>
            </div>

            <div className="cert-modal-footer">
              <a
                href={selectedCert.link}
                target="_blank"
                rel="noreferrer"
                className="btn live"
              >
                Open Full Screen PDF <span>→</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;
