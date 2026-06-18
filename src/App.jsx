import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, useState } from "react";

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
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        {/* NAVBAR + THEME BUTTON */}
        <Navbar />

        <button className="theme-btn" onClick={toggleTheme}>
          {darkMode ? "☀" : "🌙"}
        </button>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/projects"
            element={
              <div className="page">
                <Projects />
              </div>
            }
          />
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
