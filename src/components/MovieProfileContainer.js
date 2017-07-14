import React, { Component } from 'react';
import Style from 'style-it';
import { connect } from 'react-redux';

import { Grid, Col, Row } from 'react-bootstrap';
import * as Vibrant from 'node-vibrant'

class MovieProfileContainer extends Component {
  constructor(){
    super();

    this.state = {
      dcolor : []
    }
  }

  componentDidMount(){
    let path = this.props.config.config.images.base_url + this.props.config.config.images.poster_sizes[3] + this.props.movie.movie.poster_path;
    this.getPalette(path);
  }

  componentWillReceiveProps(){
    let path = this.props.config.config.images.base_url + this.props.config.config.images.poster_sizes[3] + this.props.movie.movie.poster_path;
    this.getPalette(path);
  }

  getPalette(path){
    Vibrant
      .from(path)
      .getSwatches((err,palette) => (this.setState({dcolor: palette.DarkVibrant._rgb})))
  }

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
            div.custom_bg:before {
              background-image: radial-gradient(at 10% 30%, rgb(${this.state.dcolor[0]},${this.state.dcolor[1]},${this.state.dcolor[2]}) 0%, #342931 100%);
            }
            .main-header:before {
              background-image: url(${img.base_url + img.backdrop_sizes[1] + movie.backdrop_path});
            }
          `}
        </Style>

        <Grid className="main-header" fluid={true}>
          <div className="custom_bg">

            <Col sm={8} smOffset={2} className="main-col">

              <Row className="show-grid">
                <Col xs={4} className="poster-col">{image}</Col>

                <Col xs={7}>

                  <Row className="profile-row">
                    <Col xs={12}><h1>{movie.original_title}</h1><h4>{movie.tagline}</h4></Col>
                  </Row>

                  <Row className="profile-row">
                    <Col xs={4} className="text-center"><h4>Release date</h4>{movie.release_date}</Col>
                    <Col xs={4} className="text-center"><h4>Runtime</h4>{movie.runtime} min</Col>
                    <Col xs={4} className="text-center"><h4>Vote Rate</h4>{movie.vote_average} / 10</Col>
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
