import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid, Col, Row } from 'react-bootstrap';

class MovieProfileContainer extends Component {

  render(){
    const movie = this.props.movie.movie;
    const img = this.props.config.config.images;
    let image = <img src={img.base_url + img.poster_sizes[3] + movie.poster_path} className="img-responsive center-block" alt="poster" />;
    let genres = movie.genres.map(genre => (<li key={genre.id}>{genre.name}</li>));

    return(
      <Grid className="grid-inverse">
        <Row className="show-grid">
          <Col xs={6}>
            {image}
          </Col>
          <Col xs={6}>
            <Row>
              <Col xs={12}>
                <h1>{movie.original_title}</h1>
              </Col>
            </Row>
            <Row>
              <hr />
            </Row>
            <Row className="show-grid">
              <Col xs={4}>
                <h4>Release date</h4>
                {movie.release_date}
              </Col>
              <Col xs={4}>
                <h4>Runtime</h4>
                {movie.runtime} min
              </Col>
              <Col xs={4}>
                <h4>Popularity</h4>
                {movie.popularity}
              </Col>
            </Row>
            <Row>
              <hr />
            </Row>
            <Row className="show-grid">
              <Col xs={12}>
                <h4>Overview</h4>
                {movie.overview}
              </Col>
            </Row>
            <Row>
            <hr />
            </Row>
            <Row>
              <Col xs={12}>
                <ul className="list-inline">
                  {genres}
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>


      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie,
    config: state.config
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieProfileContainer);
