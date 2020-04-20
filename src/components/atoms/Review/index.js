import React from 'react';
import { compiler } from 'markdown-to-jsx';

import { propTypes } from './propTypes';

const Review = ({ review: { id, author, content } }) => (
  <div className="reviews-element" key={id}>
    <input type="checkbox" className="review-content__more" id={id} />
    <div className="review-author">{`A review by ${author}`}</div>
    <div
      className={['review-content', content.length > 500 ? 'long' : ''].join(
        ' ',
      )}
    >
      {compiler(content.slice(0, content.indexOf(' ', 500)), {
        forceInline: true,
      })}
      <span className="review-content__hidden">
        {compiler(content.slice(content.indexOf(' ', 500)), {
          forceInline: true,
        })}
      </span>
    </div>
    {content.length > 500 && (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
      <label htmlFor={id} className="review-content__more-label" />
    )}
  </div>
);

Review.propTypes = propTypes;

export default Review;
