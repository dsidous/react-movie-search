import React from 'react';

import { propTypes } from './propTypes';
import Review from '../../atoms/Review';

const Reviews = ({ reviews }) => (
  <div className="reviews">
    <h4>Reviews</h4>
    <div className="reviews-wrapper">
      {reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  </div>
);

Reviews.propTypes = propTypes;

export default Reviews;
