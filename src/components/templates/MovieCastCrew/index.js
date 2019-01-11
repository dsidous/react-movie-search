import React, { Component } from "react";
import PropTypes from "prop-types";

import Spinner from '../../atoms/Spinner';
import FullCastCrew from '../../molecules/FullCastCrew';
import PageTransition from "../../atoms/PageTransition";

class CastCrew extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  handlePersonClick = personId => {
    this.context.router.history.push(`/person/${personId}`);
  };

  render() {
    
    if (this.props.loading) {
      return <Spinner />
    }
    
    return (
      <PageTransition>
        <FullCastCrew
          movie={this.props.movie}
          handlePersonClick={this.handlePersonClick}
        />
      </PageTransition>
    );
  }
}

export default CastCrew;
