import React from "react";

const FeedbackForm = () => {
  return (
    <div className="feedback-section">
      <h2>We Value Our Customers' Feedback</h2>
      <form className="feedback-form">
        <label>
          How do you rate your user experience? (1-5):
          <input type="number" min="1" max="5" required />
        </label>
        <br />
        <label>
          Did you find all features useful? (Yes/No):
          <select required>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <br />
        <label>
          What can we improve?
          <textarea rows="4" placeholder="Share your suggestions..." required></textarea>
        </label>
        <br />
        <button type="submit">Submit Feedback</button>
      </form>
      <div className="social-media">
        <h3>Follow us on</h3>
        <p>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            Facebook
          </a>{" "}
          |{" "}
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            Twitter
          </a>{" "}
          |{" "}
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
};

export default FeedbackForm;
