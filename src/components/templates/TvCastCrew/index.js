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
    if (this.props.loading || this.props.configLoading) {
      return (
        <div className="loader">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
          <span className="sr-only">Loading...</span>
        </div>
      )
    }
    const { secure_base_url } = this.props.config.images;
    const profile_img_base_url = secure_base_url + "w132_and_h132_face/";
    return (
      <FullCastCrew
        movie={this.props.tv}
        profile_img_base_url={profile_img_base_url}
        handlePersonClick={this.handlePersonClick}
      />
    );
  }
}

export default CastCrew;
