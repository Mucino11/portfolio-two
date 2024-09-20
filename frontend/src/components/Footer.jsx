const NavigationBarFooter = () => {
  return (
    <footer>
      <nav className="navigation-bar">
        {" "}
        {/* Use className instead of class */}
        <ul className="nav-list">
          <li>
            <a href="index.html">Musa Jalloh</a>
          </li>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="project.html">Project</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
          <li>
            <a href="resume.html">Resume</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default NavigationBarFooter;
