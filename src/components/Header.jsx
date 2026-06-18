import { Link } from "react-router-dom";

const quotes = [
  "Every expert was once a beginner.",
  "Code. Create. Inspire.",
  "Dream big and build bigger.",
];

function Header({ name, message }) {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <header className="header" id="home">
      <h1>{name}</h1>

      <p>{message}</p>

      <blockquote>"{randomQuote}"</blockquote>

      <div className="hero-buttons">
        <Link to="/projects" className="hero-btn">
          View My Projects
        </Link>

        <Link to="/contact" className="hero-btn">
          Let's Connect
        </Link>
      </div>
    </header>
  );
}

export default Header;
