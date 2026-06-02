import { useState } from "react";

function FeedbackWall() {
  const [feedbacks] = useState([
    {
      name: "Mustafa",
      rating: 5,
      comment: "Amazing Portfolio!",
    },
    {
      name: "Sahar",
      rating: 4,
      comment: "Very interesting design.",
    },
    {
      name: "Hawa",
      rating: 5,
      comment: "wonderful!",
    },
  ]);

  return (
    <section className="feedback">
      <h2>Feedback Wall</h2>

      {feedbacks.map((item, index) => (
        <div key={index} className="feedback-card">
          <h3>
            {item.name}

            {item.rating === 5 && (
              <span className="featured-review">🌟 Featured</span>
            )}
          </h3>

          <p>{"⭐".repeat(item.rating)}</p>

          <p>{item.comment}</p>
        </div>
      ))}
    </section>
  );
}

export default FeedbackWall;
