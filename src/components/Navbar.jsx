import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        AqsaVerse
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/weather">Weather</Link>
        <Link to="/todo">To-Do</Link>
      </div>
    </nav>
  );
}

export default Navbar;