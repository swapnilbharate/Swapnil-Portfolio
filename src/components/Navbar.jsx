import { useState } from "react";
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

  const themes = [
    { name: "violet", label: "Theme 1: Cyber Violet", dotClass: "dot-violet" },
    { name: "cyan", label: "Theme 2: Royal Sapphire & Cyan", dotClass: "dot-cyan" },
    { name: "emerald", label: "Theme 3: Emerald & Gold", dotClass: "dot-emerald" },
    { name: "crimson", label: "Theme 4: Crimson & Gold", dotClass: "dot-crimson" },
    { name: "indigo", label: "Theme 5: Indigo & Lime", dotClass: "dot-indigo" },
    { name: "ruby", label: "Theme 6: Ruby Rose & Platinum", dotClass: "dot-ruby" },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#home" className="logo">Swapnil Bharate</a>

        {/* Live Theme Switcher for 6 Themes */}
        <div className="theme-switcher-bar">
          <FaPalette className="theme-icon" title="Theme Selector" />
          {themes.map((t) => (
            <button
              key={t.name}
              className={`theme-dot ${t.dotClass} ${activeTheme === t.name ? "active" : ""}`}
              onClick={() => applyTheme(t.name)}
              title={t.label}
            ></button>
          ))}
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
