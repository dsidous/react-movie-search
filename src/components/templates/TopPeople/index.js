import React from "react";
import PropTypes from "prop-types";

import MyPager from "../../atoms/Pager";
import MediaImage from '../../atoms/MediaImage';

TopPeople.propTypes = {
  state: PropTypes.object.isRequired,
  toppeople: PropTypes.array.isRequired,
  handlePersonClick: PropTypes.func.isRequired,
  handlePageSelect: PropTypes.func.isRequired
};

function TopPeople(props) {
  const people = props.toppeople;

  return (
    <div className="top-people">
      <h2>POPULAR PEOPLE</h2>
      <div className="top-people__list">

        {
          people.map(person => (
            <figure
              className="top-people__list-element"
              key={person.id}
              onClick={() => props.handlePersonClick(person.id)}
            >
              <MediaImage
                mediaType="profile"
                size={1}
                filePath={person.profile_path}
                name={person.name}
                className="top-people__list-element__img"
              />
              <figcaption className="top-people__list-element__name">
                {person.name}
              </figcaption>
            </figure>
          ))
        }

      </div>
      <MyPager
        page={props.state.page}
        handlePageSelect={props.handlePageSelect}
      />
    </div>
  );
}

export default TopPeople;
