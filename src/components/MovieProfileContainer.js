import React, { Component } from 'react';
import Style from 'style-it';
import { connect } from 'react-redux';

import { Grid, Col, Row } from 'react-bootstrap';
import * as Vibrant from 'node-vibrant'

import * as actions from '../actions';

class MovieProfileContainer extends Component {
  constructor(){
    super();

    this.state = {
      dcolor : []
    }
  }

  componentDidMount(){
    this.getPalette();
  }

  componentWillReceiveProps(){
    this.getPalette();
  }

  getPalette(path){
    if (this.props.movie.movie.poster_path) {
      let path = this.props.config.config.images.base_url + this.props.config.config.images.poster_sizes[3] + this.props.movie.movie.poster_path;
      Vibrant
        .from(path)
        .getSwatches((err,palette) => (this.setState({dcolor: palette.DarkVibrant._rgb})))
    }else {
      this.setState({dcolor: [0,0,0]})
    }
  }

  handleMovieClick(movieId){
    if (typeof movieId !== "undefined") {
      // this.props.dispatch(actions.getMovie(movieId));
      // this.props.dispatch(actions.getCrew(movieId));
      // this.props.dispatch(actions.getSimilarMovie(movieId));
      console.log(movieId);
    }
  }

  render(){
    const movie = this.props.movie.movie;
    const img = this.props.config.config.images;

    let posterURL = img.base_url + img.poster_sizes[3] + movie.poster_path;
    let backdropURL = img.base_url + img.backdrop_sizes[1] + movie.backdrop_path;
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

    let similar = this.props.movie.similar.map((sim,i) => (
      <li key={i} className="col-sm-2" onClick={this.handleMovieClick(sim.id)}>
        <p className="crew-col text-center">
          <img src={img.base_url + img.poster_sizes[1] + sim.poster_path} /><br />
          <small>{sim.original_title}</small>
        </p>
      </li>
    ))

    return(
      <div>
        <Style>
          {`
            div.custom_bg:before {
              background-image: radial-gradient(at 10% 30%, rgb(${this.state.dcolor[0]},${this.state.dcolor[1]},${this.state.dcolor[2]}) 0%, #342931 100%);
            }
            .main-header:before {
              background-image: url(${backdropURL});
            }
          `}
        </Style>

        <Grid className="main-header" fluid={true}>
          <div className="custom_bg">

            <Col sm={8} smOffset={2} className="main-col">

              <Row className="show-grid">
                <Col xs={4} className="poster-col">
                  <img src={posterURL} className="img-responsive center-block" alt="poster" />
                </Col>

                <Col xs={7}>

                  <Row className="profile-row">
                    <Col xs={12}>
                      <h1 className="movie-title">{movie.original_title}</h1>
                        <ul className="list-inline title-tags">
                          <li>{movie.release_date.substring(0,4)}</li>
                          <li>{movie.runtime} min</li>
                            {genres}
                          <li>{movie.vote_average} / 10</li>
                        </ul>
                      <h4>{movie.tagline}</h4>
                    </Col>
                  </Row>

                  <Row className="profile-row">
                    <Col xs={12}><h4>Overview</h4>{movie.overview}</Col>
                  </Row>

                  <Row className="profile-row profile-row--no-border">
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
        <Col sm={9} smOffset={2}>
          <h3>Similar movies</h3>
          <Row className="profile-row profile-row--no-border">
            <Col xs={12}>
              <ul className="list-inline">
                {similar}
              </ul>
            </Col>
          </Row>
        </Col>
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
