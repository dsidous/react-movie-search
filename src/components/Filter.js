import React from "react";
import {
  ControlLabel,
  Form,
  FormGroup,
  FormControl,
  Pager
} from "react-bootstrap";
import PropTypes from "prop-types";

import FilterGenres from "./FilterGenres";
import ResultContainer from "../containers/ResultContainer";

Filter.propTypes = {
  config: PropTypes.object.isRequired,
  movies: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleGenresChange: PropTypes.func.isRequired,
  handlePageSelect: PropTypes.func.isRequired
};

function Filter(props) {
  let year_options = Array(118)
    .fill()
    .map((_, i) => (
      <option key={i} value={2017 - i}>
        {2017 - i}
      </option>
    ));

  return (
    <div className="filter-wrapper">
      <Form inline>
        <FormGroup className="filter-element-wrapper">
          <ControlLabel>Sort By</ControlLabel>
          <br />
          <FormControl
            componentClass="select"
            placeholder="select"
            onChange={props.handleChange}
            defaultValue="popularity.desc"
            id="sort_by"
          >
            <option value="popularity.desc">Popularity Descending</option>
            <option value="popularity.asc">Popularity Ascending</option>
            <option value="vote_average.desc">Rating Descending</option>
            <option value="vote_average.asc">Rating Ascending</option>
            <option value="primary_release_date.desc">
              Release Date Descending
            </option>
            <option value="primary_release_date.asc">
              Release Date Ascending
            </option>
            <option value="title.asc">Title (A-Z)</option>
            <option value="title.desc">Title (Z-A)</option>
          </FormControl>
        </FormGroup>
        <FormGroup className="filter-element-wrapper">
          <ControlLabel>Year</ControlLabel>
          <br />
          <FormControl
            componentClass="select"
            placeholder="select"
            onChange={props.handleChange}
            defaultValue="2017"
            id="primary_release_year"
          >
            <option value="">None</option>
            {year_options}
          </FormControl>
        </FormGroup>
        {props.config.genres[0] && (
          <FormGroup className="filter-element-wrapper filter-genres-wrapper">
            <ControlLabel>Genres</ControlLabel>
            <br />
            <FilterGenres
              genres={props.config.genres}
              onChange={props.handleGenresChange}
              value={props.state.with_genres}
            />
          </FormGroup>
        )}
        <FormGroup className="filter-element-wrapper">
          <ControlLabel>Average vote</ControlLabel>
          <br />
          <FormControl
            componentClass="select"
            id="vote_average.gte"
            placeholder="select"
            onChange={props.handleChange}
            defaultValue=""
          >
            <option value="">Greater than...</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </FormControl>
        </FormGroup>
      </Form>
      <ResultContainer />
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

export default Filter;
