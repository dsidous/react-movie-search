import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Vibrant from "node-vibrant";

import Spinner from '../../atoms/Spinner';
import PageTransition from "../../atoms/PageTransition/index";
import ShowProfile from "../../organisms/ShowProfile";

export default class Movie extends Component {
  state = {
    dcolor: [0, 0, 0],
    movieId: this.props.match.params.movieId || ''
  };

  static propTypes = {
    config: PropTypes.object.isRequired,
    movie: PropTypes.object.isRequired
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading && !nextProps.configLoading) {
      let movieId = nextProps.match.params.movieId;
      this.setState({ movieId });
      this.getPalette(nextProps);
    }
  }

  getPalette = (props) => {
    const { movie: { poster_path }, config: { images } } = props;
    if (poster_path) {
      const path = images.secure_base_url + images.poster_sizes[3] + poster_path;
      // Vibrant.from(path).getSwatches((err, palette) => {
      //   this.setState({ dcolor: (palette.DarkVibrant !== null) ? palette.DarkVibrant._rgb : [0, 0, 0] })
      // });
    };
  };

  handleMovieClick = movieId => {
    this.context.router.history.push(`/movie/${movieId}`);
  };

  handleFullCrewClick = () => {
    this.context.router.history.push(`/movie/${this.props.movie.id}/crew`);
  };

  render() {
    if (this.props.loading) {
      return <Spinner />
    }

    return (
      <div>
        <PageTransition>
          <ShowProfile
            key={this.props.movie.id}
            config={this.props.config}
            show={this.props.movie}
            dcolor={this.state.dcolor}
            handleShowClick={this.handleMovieClick}
            handleFullCrewClick={this.handleFullCrewClick}
          />
        </PageTransition>
      </div>
    );
  }
}