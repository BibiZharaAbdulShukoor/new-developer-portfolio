import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import FeedbackWall from "./components/FeedbackWall";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        {/* NAVBAR + THEME BUTTON */}
        <Navbar />

        <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀" : "🌙"}
        </button>

        {/* ROUTES */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  name="Bibi Zhara Abdul Shukoor"
                  message="Welcome to my developer portfolio!"
                />
                <Profile
                  photo="https://thumbs.dreamstime.com/b/female-asian-teen-gaming-neon-lit-room-multiple-screens-posters-girl-plays-computer-anime-game-concept-346793910.jpg"
                  title="Frontend React Developer"
                  bio="I love building modern web applications."
                />
                <Skills />
                <FeedbackWall />
              </>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
