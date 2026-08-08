import { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn, MdContentCopy, MdCheck } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === "phone") {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container contact">
        {/* LEFT SIDE */}
        <div className="contact-text">
          <h1>
            Contact <span className="text">Me</span>
          </h1>

          <h4>Let's work Together</h4>

          <p>
            I'm always open to discussing new opportunities, full-stack roles, collaborations, or innovative project ideas.
          </p>

          <ul className="contact-list">
            <li>
              <div className="contact-item-left">
                <MdEmail className="icon" />
                <a href="mailto:bharateswapnil96@gmail.com">
                  bharateswapnil96@gmail.com
                </a>
              </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard("bharateswapnil96@gmail.com", "email")}
                title="Copy Email"
              >
                {copiedEmail ? <MdCheck className="copied-icon" /> : <MdContentCopy />}
                <span>{copiedEmail ? "Copied!" : "Copy"}</span>
              </button>
            </li>

            <li>
              <div className="contact-item-left">
                <MdPhone className="icon" />
                <a href="tel:+919552966603">+91 9552966603</a>
              </div>
              <button
                className="copy-btn"
                onClick={() => copyToClipboard("+919552966603", "phone")}
                title="Copy Phone Number"
              >
                {copiedPhone ? <MdCheck className="copied-icon" /> : <MdContentCopy />}
                <span>{copiedPhone ? "Copied!" : "Copy"}</span>
              </button>
            </li>

            <li>
              <div className="contact-item-left">
                <MdLocationOn className="icon" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </li>
          </ul>

          {/* SOCIAL ICONS */}
          <div className="social-icons">
            <a
              href="https://github.com/swapnilbharate"
              className="social-btns"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="http://www.linkedin.com/in/swapnil-bharate-b84408291"
              className="social-btns"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/919552966603"
              className="social-btns"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mnjogzvk"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Enter Your Subject"
            />

            <textarea
              name="message"
              placeholder="Enter Your Message"
              required
            ></textarea>

            {/* Anti-spam honeypot */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: "none" }}
            />

            <button type="submit" className="send">
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
