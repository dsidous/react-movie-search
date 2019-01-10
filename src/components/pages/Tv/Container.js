import React, { Component } from "react";
import PropTypes from "prop-types";
import * as Vibrant from "node-vibrant";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import TvProfile from "../../templates/Tv";

export default class TvProfileContainer extends Component {
  state = {
    dcolor: [0, 0, 0],
    tvId: this.props.match.params.tvId || ''
  };

  static propTypes = {
    config: PropTypes.object.isRequired,
    tv: PropTypes.object.isRequired
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading && !nextProps.configLoading) {
      let tvId = nextProps.match.params.tvId;
      this.setState({ tvId });
      this.getPalette(nextProps);
    }
  }

  getPalette = (props) => {
    const { tv: { poster_path }, config: { images } } = props;
    if (poster_path) {
      const path = images.secure_base_url + images.poster_sizes[3] + poster_path;
      Vibrant.from(path).getSwatches((err, palette) => {
        this.setState({ dcolor: (palette.DarkVibrant !== null) ? palette.DarkVibrant._rgb : [0, 0, 0] })
      });
    };
  };

  handleTvClick = tvId => {
    this.context.router.history.push(`/tv/${tvId}`);
  };

  handleFullCrewClick = () => {
    this.context.router.history.push(`/tv/${this.props.tv.id}/crew`);
  };

  handlePersonClick = personId => {
    this.context.router.history.push(`/person/${personId}`);
  };

  render() {
    return (
      <div>
        {
          (this.props.loading) ? (
            <div className="loader">
              <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
              <ReactCSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={1500}
                transitionEnterTimeout={1500}
                transitionLeave={false}
              >
                <TvProfile
                  key={this.props.tv.id}
                  config={this.props.config}
                  tv={this.props.tv}
                  dcolor={this.state.dcolor}
                  handleTvClick={this.handleTvClick}
                  handlePersonClick={this.handlePersonClick}
                  handleFullCrewClick={this.handleFullCrewClick}
                />
              </ReactCSSTransitionGroup>
            )}
      </div>
    );
  }
}