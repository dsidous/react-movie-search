import React, { Component } from "react";
import PropTypes from "prop-types";

import Spinner from "../../atoms/Spinner";
import PageTransition from "../../atoms/PageTransition";
import FullCastCrew from '../../molecules/FullCastCrew';
import MiniHeader from '../../molecules/MiniHeader';

class CastCrew extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  render() {

    if (this.props.loading) {
      return <Spinner />
    }

    const { tv: { name, first_air_date, id, poster_path } } = this.props;

    return (
      <PageTransition>
        <MiniHeader
          title={name}
          release_date={first_air_date}
          poster_path={poster_path}
          link={`/tv/${id}`}
          linkCopy="Back to main"
        />
        <FullCastCrew
          movie={this.props.tv}
        />
      </PageTransition>
    );
  }
}

export default CastCrew;
