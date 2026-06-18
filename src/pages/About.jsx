import { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);

  const hobbies = [
    "Coding",
    "Reading",
    "Writing Poems",
    "Traveling",
    "Cooking",
  ];

  const technologies = ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub"];

  return (
    <section className="about" id="about">
      <h2>About Me</h2>

      <div className="about-container">
        <div className="about-text">
          <h3>Who I Am</h3>

          <p>
            Hello! I'm Bibi Hawa Abdul Shukoor, an aspiring Frontend React
            Developer who enjoys creating responsive, accessible and modern web
            applications.
          </p>

          <h3>My Learning Journey</h3>

          <p>
            My journey started with HTML, CSS and JavaScript. As my interest
            grew, I learned React and began building interactive projects that
            improved both my technical and problem-solving skills.
          </p>

          <h3>Career Goals</h3>

          <p>
            My goal is to become a professional Frontend Engineer and contribute
            to meaningful projects that create positive user experiences.
          </p>

          <h3>Work Philosophy</h3>

          <p>
            I believe in writing clean, reusable and user-friendly code while
            continuously learning new technologies.
          </p>

          {showMore && (
            <>
              <h3>My Strengths</h3>

              <p>
                I am a quick learner, detail-oriented, creative and enjoy
                collaborating with others to solve problems.
              </p>

              <h3>Technologies I Use</h3>

              <ul>
                {technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </>
          )}

          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>

        <div className="about-hobbies">
          <h3>My Interests & Hobbies</h3>

          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
