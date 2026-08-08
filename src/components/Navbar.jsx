import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const toggleLightDarkMode = () => {
    const nextMode = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    if (nextMode === "light") {
      document.documentElement.setAttribute("data-mode", "light");
    } else {
      document.documentElement.removeAttribute("data-mode");
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#home" className="logo">Swapnil Bharate</a>

        <div className="nav-right-group">
          {/* Day / Night Mode Button placed FIRST on the right side */}
          <button
            className="mode-toggle-btn"
            onClick={toggleLightDarkMode}
            title={isDarkMode ? "Switch to Day Mode" : "Switch to Night Mode"}
            aria-label="Toggle Day/Night Mode"
          >
            {isDarkMode ? <FaSun className="mode-icon sun" /> : <FaMoon className="mode-icon moon" />}
          </button>

          {/* Navigation Links placed AFTER Day/Night Mode Button */}
          <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>

          {/* Mobile Hamburger Menu Button */}
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
