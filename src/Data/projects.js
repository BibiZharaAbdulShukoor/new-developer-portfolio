import schoolPortal from "../assets/school portal.png";
import signInPage from "../assets/sign-in page.jpeg";
import weatherApp from "../assets/wheatherapp.jpeg";

const projects = [
  {
    id: 1,
    name: "School Portal",
    image: schoolPortal,
    description: "A school management portal for students and teachers.",
    link: "https://github.com/BibiZharaAbdulShukoor/school-portal.git",
    techStack: ["React", "CSS", "JavaScript"],
    featured: true,
  },

  {
    id: 2,
    name: "Sign-In Page",
    image: signInPage,
    description: "A responsive authentication and login page.",
    link: "https://github.com/BibiZharaAbdulShukoor/sign-in-page.git",
    techStack: ["HTML", "CSS", "JavaScript"],
    featured: false,
  },

  {
    id: 3,
    name: "Clock App",
    image: weatherApp,
    description: "Weather forecasting application using API data.",
    link: "https://github.com/BibiZharaAbdulShukoor/clock-app.git",
    techStack: ["React", "API", "CSS"],
    featured: true,
  },
];

export default projects;
