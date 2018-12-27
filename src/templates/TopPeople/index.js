import React from "react";
import PropTypes from "prop-types";
import { Pager } from "react-bootstrap";


TopPeople.propTypes = {
  config: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  toppeople: PropTypes.array.isRequired,
  handlePersonClick: PropTypes.func.isRequired,
  handlePageSelect: PropTypes.func.isRequired
};

function TopPeople(props) {
  const people = props.toppeople;

  const { base_url, profile_sizes } = props.config.images;

  const profile_path = base_url + profile_sizes[1];

  return (
    <div className="top-people">
      <h2>POPULAR PEOPLE</h2>
      <div className="top-people__list">

        {people &&
          people.map(person => (
            <figure
              className="top-people__list-element"
              key={person.id}
              onClick={() => props.handlePersonClick(person.id)}
            >
              <img
                className="top-people__list-element__img"
                src={profile_path + person.profile_path}
                alt={person.name}
              />
              <figcaption className="top-people__list-element__name">
                {person.name}
              </figcaption>
            </figure>
          ))}

      </div>
      <Pager>
        <Pager.Item
          previous
          eventKey={props.state.page - 1}
          href="#"
          onSelect={props.handlePageSelect}
        >
          &larr; Previous
        </Pager.Item>
        <Pager.Item
          next
          eventKey={props.state.page + 1}
          onSelect={props.handlePageSelect}
        >
          Next &rarr;
        </Pager.Item>
      </Pager>
    </div>
  );
}

export default TopPeople;
