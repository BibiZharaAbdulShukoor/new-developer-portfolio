import Header from "../components/Header";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
import FeedbackWall from "../components/FeedbackWall";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        {" "}
        <title>Bibi Zhara | Home</title>
      </Helmet>
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
  );
}

export default Home;
