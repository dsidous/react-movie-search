import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";


import Episode from '../../molecules/Episode';
import MediaImage from '../../atoms/MediaImage';

class Season extends Component {

  static propTypes = {
    tvSeason: PropTypes.object.isRequired
  };

  render() {
    if (this.props.loading) {
      return (
        <div className="loader">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      )
    }

    const { tvSeason: { name, air_date, episodes, poster_path }, tvId } = this.props;
    const date = air_date.slice(0, 4);

    return (
      <div>
        <div className="season__header">
          <div className="season__header__inner">
            <MediaImage
              mediaType="poster"
              size={1}
              filePath={poster_path}
              name={name}
            />
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
              <Episode episode={episode} />
            </li>
          ))}
        </ul>
      </div>
    )
  }

}

export default withRouter(Season);