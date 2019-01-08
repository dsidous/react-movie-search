import React, { Component } from 'react';
import PropTypes from "prop-types";

import Episode from '../../molecules/Episode';

class Season extends Component {
  
  static propTypes = {
    config: PropTypes.object.isRequired,
    tvSeason: PropTypes.object.isRequired
  };

  render(){
    if (this.props.loading || this.props.configLoading) { 
      return (
        <div className="loader">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      )
    }

    const {tvSeason: {name, air_date, episodes }, config} = this.props;
    
    return (
      <div>
        <div>
          <span>{name}</span>&nbsp;
          <span>{air_date}</span>
        </div>
        <ul>
          {episodes.map(episode => (
            <li key={episode.episode_number}>
              <Episode episode={episode} config={config} />
            </li>
          ))}
        </ul>
      </div>
    )
  }

}

export default Season;