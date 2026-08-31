 import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">

      <div className="hero-content">
        <p className="greeting">Hello, I'm</p>

        <h1>
          Aqsa <span>Raza</span>
        </h1>

        <h2>AI Student & Future Web Developer</h2>

        <p className="about-text">
          I am a passionate student interested in Artificial Intelligence,
          web development, and modern technologies. I enjoy learning new
          skills and building creative projects.
        </p>

        <div className="hero-buttons">
          <Link to="/skills" className="btn primary-btn">
            Explore Skills
          </Link>

          <Link to="/todo" className="btn secondary-btn">
            My To-Do App
          </Link>
        </div>
      </div>

      <div className="profile-card">
        <div className="profile-icon">AR</div>

        <h3>About Me</h3>

        <p>
          Bachelor Student in Artificial Intelligence with an interest in
          React JS, JavaScript, UI Design and modern web technologies.
        </p>

        <div className="education">
          <h4>🎓 Education</h4>
          <p>I am doing Artificial Intelligence right now </p>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

    </section>
  );
}

export default Home;
