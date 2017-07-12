import React, { Component } from 'react';
import Style from 'style-it';
import { connect } from 'react-redux';

import { Grid, Col, Row } from 'react-bootstrap';

class MovieProfileContainer extends Component {

  render(){
    const movie = this.props.movie.movie;
    const img = this.props.config.config.images;
    let image = <img src={img.base_url + img.poster_sizes[3] + movie.poster_path} className="img-responsive center-block" alt="poster" />;
    let genres = movie.genres.map(genre => (<li key={genre.id}>{genre.name}</li>));
    let crew = this.props.movie.crew.slice(0,9)
          .map((cr,i) => (
            <li key={i} className="col-sm-4">
              <p className="crew-col text-center">
                <strong>{cr.name}</strong><br />
                <small>{cr.character}</small>
              </p>
            </li>
          ));

    return(
      <div>
        <Style>
          {`
            .main-header:before {
              background-image: url(${img.base_url + img.backdrop_sizes[1] + movie.backdrop_path});
            }
          `}
        </Style>

        <Grid className="main-header" fluid={true}>
          <div className="custom_bg">

            <Col sm={6} smOffset={3} className="main-col">

              <Row className="show-grid">
                <Col xs={6} className="poster-col">{image}</Col>

                <Col xs={6}>

                  <Row className="profile-row">
                    <Col xs={12}><h1>{movie.original_title}</h1><h4>{movie.tagline}</h4></Col>
                  </Row>

                  <Row className="profile-row">
                    <Col xs={4}><h4>Release date</h4>{movie.release_date}</Col>
                    <Col xs={4}><h4>Runtime</h4>{movie.runtime} min</Col>
                    <Col xs={4}><h4>Vote Rate</h4>{movie.vote_average} / 10</Col>
                  </Row>

                  <Row className="profile-row">
                    <Col xs={12}><h4>Overview</h4>{movie.overview}</Col>
                  </Row>

                  <Row className="profile-row">
                    <Col xs={12}>
                      <ul className="list-inline">
                        {genres}
                      </ul>
                    </Col>
                  </Row>

                  <Row className="profile-row">
                    <Col xs={12}>
                      <ul className="list-inline">
                        {crew}
                      </ul>
                    </Col>
                  </Row>

                </Col>

              </Row>

            </Col>
          </div>

        </Grid>
    </div>
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
