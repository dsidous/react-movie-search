import React from 'react';
import {ReadMore} from 'react-read-more';
import '../styles/reviews.css';

function Reviews(props){
  const reviews = props.reviews.map(review => (
      <div className="reviews-element">
        <div className="review-author">A review by {review.author}</div>
        <div className="review-content">
          <ReadMore lines={3} text="more">
            {review.content}
          </ReadMore>
        </div>
      </div>
  ))

  return (
    <div>
      <h4>Reviews</h4>
      <div className="reviews-wrapper">
        {reviews}
      </div>
    </div>
  )
};

export default Reviews;
