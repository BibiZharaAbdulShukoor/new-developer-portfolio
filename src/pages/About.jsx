import { useState } from "react";

function About() {
  const [showMore, setShowMore] = useState(false);

  const hobbies = [
    "Coding",
    "Reading",
    "Writting Poems",
    "Traveling",
    "Cooking",
  ];

  return (
    <section className="about" id="about">
      <h2>About Me</h2>

      <div className="about-container">
        <div className="about-text">
          <h3>Who I am</h3>

          <p>
            I’m a self-taught developer who began coding 4 years ago out of
            curiosity about how things work. Since then, I’ve grown into a
            full-stack developer, working with startups and established
            companies to build scalable web applications. I enjoy the
            intersection of design and functionality and continuously explore
            new technologies to stay ahead of the curve.
          </p>
          <p>
            Since then, I’ve grown into a full-stack developer, working with
            startups and established companies.
          </p>
          <h3>My Goals</h3>
          <p>
            My primary goal is to build software that makes a positive impact on
            people’s lives. I aim to continue growing as a developer, mentoring
            others, and contributing to open-source projects. I’m especially
            interested in creating tools that improve developer productivity and
            building accessible web experiences for everyone.
          </p>

          {showMore && (
            <p>
              I aim to continue growing as a developer, mentoring others, and
              contributing to open-source projects.
            </p>
          )}

          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>

        <div className="about-hobbies">
          <h3>Hobbies</h3>

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
