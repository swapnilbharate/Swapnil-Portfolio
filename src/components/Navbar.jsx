import { useState } from "react";
import { FaPalette, FaSun, FaMoon } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("emerald");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const applyTheme = (themeName) => {
    setActiveTheme(themeName);
    document.documentElement.setAttribute("data-theme", themeName);
  };

  const toggleLightDarkMode = () => {
    const nextMode = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    if (nextMode === "light") {
      document.documentElement.setAttribute("data-mode", "light");
    } else {
      document.documentElement.removeAttribute("data-mode");
    }
  };

  const themes = [
    { name: "emerald", label: "Theme 1: Emerald & Gold", dotClass: "dot-emerald" },
    { name: "cyan", label: "Theme 2: Royal Sapphire & Cyan", dotClass: "dot-cyan" },
    { name: "violet", label: "Theme 3: Cyber Violet & Pink", dotClass: "dot-violet" },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#home" className="logo">Swapnil Bharate</a>

        {/* Live Controls: Theme Selector + Light/Dark Mode Switcher */}
        <div className="nav-controls-wrapper">
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

          {/* Light / Dark Mode Toggle Button */}
          <button
            className="mode-toggle-btn"
            onClick={toggleLightDarkMode}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Light/Dark Mode"
          >
            {isDarkMode ? <FaSun className="mode-icon sun" /> : <FaMoon className="mode-icon moon" />}
          </button>
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
