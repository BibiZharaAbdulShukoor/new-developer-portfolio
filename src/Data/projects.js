import schoolPortal from "../assets/school portal.png";
import signInPage from "../assets/sign-in page.jpeg";
import clockApp from "../assets/wheatherapp.jpeg";

const projects = [
  {
    id: 1,

    title: "School Portal",

    category: "Web Application",

    image: schoolPortal,

    summary:
      "A responsive school management platform built to simplify academic workflows.",

    description:
      "A responsive school management platform that helps students and teachers organize academic activities efficiently.",

    problem:
      "Managing school information manually is time-consuming and difficult.",

    solution:
      "Built a centralized portal with dashboards for students and teachers.",

    outcome: "Improved organization, accessibility, and user experience.",

    techStack: ["React", "CSS", "JavaScript"],

    featured: true,

    status: "Completed",

    progress: 100,

    liveDemo: "https://github.com/BibiZharaAbdulShukoor/school-portal",

    github: "https://github.com/BibiZharaAbdulShukoor/school-portal",
  },

  {
    id: 2,

    title: "Sign-In Page",

    category: "Authentication UI",

    image: signInPage,

    summary: "A modern and responsive authentication interface.",

    description:
      "A clean sign-in page designed with accessibility and responsiveness in mind.",

    problem: "Users need a simple and secure authentication experience.",

    solution: "Created a responsive sign-in page with form validation.",

    outcome: "Improved usability and user experience.",

    techStack: ["HTML", "CSS", "JavaScript"],

    featured: false,

    status: "Completed",

    progress: 100,

    liveDemo: "https://github.com/BibiZharaAbdulShukoor/sign-in-page",

    github: "https://github.com/BibiZharaAbdulShukoor/sign-in-page",
  },

  {
    id: 3,

    title: "Clock App",

    category: "Utility Application",

    image: clockApp,

    summary: "A real-time clock application built using React.",

    description:
      "A dynamic clock application that updates automatically in real time.",

    problem: "Users need accurate time information displayed dynamically.",

    solution: "Built a clock application using React state management.",

    outcome:
      "Strengthened React state management and dynamic rendering skills.",

    techStack: ["React", "CSS"],

    featured: true,

    status: "Completed",

    progress: 100,

    liveDemo: "https://github.com/BibiZharaAbdulShukoor/clock-app",

    github: "https://github.com/BibiZharaAbdulShukoor/clock-app",
  },
];

export default projects;
