function FeedbackCard({ feedback }) {
  return (
    <div className="feedback-card">
      <h3>
        {feedback.name}

        {feedback.rating === 5 && (
          <span className="featured-review"> 🌟 Featured</span>
        )}
      </h3>

      <p>{"⭐".repeat(feedback.rating)}</p>

      <p>{feedback.comment}</p>
    </div>
  );
}

export default FeedbackCard;
