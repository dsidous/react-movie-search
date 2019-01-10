import React, { Component } from "react";
import PropTypes from "prop-types";

import FullCastCrew from '../../molecules/FullCastCrew';

class CastCrew extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  handlePersonClick = personId => {
    this.context.router.history.push(`/person/${personId}`);
  };

  render() {
    if (this.props.loading) {
      return (
        <div className="loader">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
          <span className="sr-only">Loading...</span>
        </div>
      )
    }
    
    return (
      <FullCastCrew
        movie={this.props.movie}
        handlePersonClick={this.handlePersonClick}
      />
    );
  }
}

export default CastCrew;
