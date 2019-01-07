import React, { Component } from "react";
import PropTypes from "prop-types";

import Season from '../../molecules/Season';

class Seasons extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  componentDidMount = () => { window.scrollTo(0, 0) }

  handleSeasonClick = seasonId => {
    this.context.router.history.push(`tv/${this.props.tv.id}/season/${seasonId}`);
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

    const {config,tv:{seasons, name, first_air_date}} = this.props;

    return (
      <div>
        <div className="seasons__header">
          <h2>{name}
            <span> ({first_air_date.slice(0, 4)})</span>
          </h2>
        </div>
        <ul className="seasons">
        {seasons.sort((a,b) => a.season_number - b.season_number).map(season => (
          <li className="seasons__element" key={season.season_number}>
            <Season season={season} config={config} handleSeasonClick={this.handleSeasonClick}/> 
          </li>          
        ))}
        </ul>
      </div>
    );
  }
}

export default Seasons;
