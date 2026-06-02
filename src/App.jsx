import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import FeedbackWall from "./components/FeedbackWall";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀" : "🌙"}
      </button>

      <Navbar />
      <Header
        name="Bibi Zhara Abdul Shukoor"
        message="Welcome to my developer portfolio!"
      />
      <Profile
        photo={
          "https://thumbs.dreamstime.com/b/female-asian-teen-gaming-neon-lit-room-multiple-screens-posters-girl-plays-computer-anime-game-concept-346793910.jpg"
        }
        title="Frontend React Developer"
        bio="I love building modern web applications."
      />
      <About />
      <Projects />
      <Skills />
      <ContactForm />
      <FeedbackWall />
      <Footer />
    </div>
  );
}

export default App;
