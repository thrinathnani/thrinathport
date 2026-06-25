
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo / Name */}
      <div className="nav-logo">ARK THRINATH</div>


      {/* Contact Button */}
      <a href="#contact" className="contact-btn">
        Contact Me
      </a>
    </nav>
  );
};

export default Navbar;
