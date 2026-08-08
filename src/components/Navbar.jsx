import { useState, useEffect } from "react";
import { FaPalette } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("violet");

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const applyTheme = (themeName) => {
    setActiveTheme(themeName);
    if (themeName === "violet") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", themeName);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#home" className="logo">Swapnil Bharate</a>

        {/* Live Theme Switcher */}
        <div className="theme-switcher-bar">
          <FaPalette className="theme-icon" title="Theme Selector" />
          <button
            className={`theme-dot dot-violet ${activeTheme === "violet" ? "active" : ""}`}
            onClick={() => applyTheme("violet")}
            title="Theme 1: Cyber Violet"
          ></button>
          <button
            className={`theme-dot dot-cyan ${activeTheme === "cyan" ? "active" : ""}`}
            onClick={() => applyTheme("cyan")}
            title="Theme 2: Royal Sapphire & Cyan"
          ></button>
          <button
            className={`theme-dot dot-emerald ${activeTheme === "emerald" ? "active" : ""}`}
            onClick={() => applyTheme("emerald")}
            title="Theme 3: Emerald & Gold"
          ></button>
        </div>

        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
