import React, { Component } from "react";
import PropTypes from "prop-types";

import Spinner from '../../atoms/Spinner';
import FullCastCrew from '../../molecules/FullCastCrew';
import PageTransition from "../../atoms/PageTransition";
import MiniHeader from '../../molecules/MiniHeader';

class CastCrew extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  render() {

    if (this.props.loading) {
      return <Spinner />
    }

    const { movie: { id, title, release_date, poster_path } } = this.props;

    return (
      <PageTransition>
        <MiniHeader
          title={title}
          release_date={release_date}
          poster_path={poster_path}
          link={`/movie/${id}`}
          linkCopy="Back to main"
        />
        <FullCastCrew
          movie={this.props.movie}
        />
      </PageTransition>
    );
  }
}

export default CastCrew;
