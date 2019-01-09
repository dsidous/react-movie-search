import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";


import Episode from '../../molecules/Episode';

class Season extends Component {

  static propTypes = {
    config: PropTypes.object.isRequired,
    tvSeason: PropTypes.object.isRequired
  };

  render() {
    if (this.props.loading || this.props.configLoading) {
      return (
        <div className="loader">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      )
    }

    const { tvSeason: { name, air_date, episodes, poster_path }, config, tvId } = this.props;
    const date = air_date.slice(0, 4);
    const poster = config.images.secure_base_url + config.images.poster_sizes[1] + poster_path;
    return (
      <div>
        <div className="season__header">
          <div className="season__header__inner">
            <img src={poster} alt={name} />
            <div className="season__header__info">
              <h2>{name}&nbsp;
                <span>({date})</span>
                </h2>
                <h4>
                  <Link to={`/tv/${tvId}/seasons`}>&#8592; Back to seasons</Link>
                </h4>
            </div>
          </div>
        </div>
        <ul className="episodes__wrapper">
          {episodes.map(episode => (
            <li className="episodes__element" key={episode.episode_number}>
              <Episode episode={episode} config={config} />
            </li>
          ))}
        </ul>
      </div>
    )
  }

}

export default withRouter(Season);