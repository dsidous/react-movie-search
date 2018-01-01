import React from 'react';
import '../styles/reviews.css';

function Reviews(props){
  const reviews = props.reviews.map((review,i) => (
      <div className="reviews-element" key={i}>
        <input type="checkbox" className="review-content__more" id={`rw-${i}`} />
        <div className="review-author">A review by {review.author}</div>
        <div className="review-content">
            {review.content.slice(0, review.content.indexOf(' ', 500))}
            <span className="review-content__hidden">
            {review.content.slice(review.content.indexOf(' ', 500))}  
            </span>          
        </div>
        {review.content.length > 500 &&
          <label for={`rw-${i}`} className="review-content__more-label"></label>        
        }    
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
