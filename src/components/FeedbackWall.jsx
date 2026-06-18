import { useState } from "react";
import FeedbackCard from "./FeedbackCard";

function FeedbackWall() {
  const [feedbacks] = useState([
    {
      id: 1,
      name: "Mustafa",
      rating: 5,
      comment: "Amazing Portfolio!",
    },
    {
      id: 2,
      name: "Sahar",
      rating: 4,
      comment: "Very interesting design.",
    },
    {
      id: 3,
      name: "Hawa",
      rating: 5,
      comment: "Wonderful!",
    },
  ]);

  return (
    <section className="feedback">
      <h2>Feedback Wall</h2>

      {feedbacks.map((feedback) => (
        <FeedbackCard key={feedback.id} feedback={feedback} />
      ))}
    </section>
  );
}

export default FeedbackWall;
