import React from "react";
import { compiler } from "markdown-to-jsx";

function Reviews(props) {
  const reviews = props.reviews.map((review, i) => (
    <div className="reviews-element" key={i}>
      <input type="checkbox" className="review-content__more" id={`rw-${i}`} />
      <div className="review-author">A review by {review.author}</div>
      <div
        className={[
          "review-content",
          review.content.length > 500 ? "long" : ""
        ].join(" ")}
      >
        {compiler(review.content.slice(0, review.content.indexOf(" ", 500)), {
          forceInline: true
        })}
        <span className="review-content__hidden">
          {compiler(review.content.slice(review.content.indexOf(" ", 500)), {
            forceInline: true
          })}
        </span>
      </div>
      {review.content.length > 500 && (
        <label htmlFor={`rw-${i}`} className="review-content__more-label" />
      )}
    </div>
  ));

  return (
    <div className="reviews">
      <h4>Reviews</h4>
      <div className="reviews-wrapper">{reviews}</div>
    </div>
  );
}

export default Reviews;
