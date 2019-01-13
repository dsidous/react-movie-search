import React, { Component } from 'react';
import PropTypes from "prop-types";

import Spinner from '../../atoms/Spinner';
import Episode from '../../molecules/Episode';
import PageTransition from '../../atoms/PageTransition';
import MiniHeader from '../../molecules/MiniHeader';

class Season extends Component {

  static propTypes = {
    tvSeason: PropTypes.object.isRequired
  };

  render() {
    if (this.props.loading) {
      return <Spinner />
    }

    const { tvSeason: { name, air_date, episodes, poster_path }, tvId } = this.props;

    return (
      <PageTransition>
        <MiniHeader
          title={name}
          release_date={air_date}
          poster_path={poster_path}
          link={`/tv/${tvId}/seasons`}
          linkCopy="Back to seasons"
        />

        <ul className="episodes__wrapper">
          {episodes.map(episode => (
            <li className="episodes__element" key={episode.episode_number}>
              <Episode episode={episode} />
            </li>
          ))}
        </ul>
      </PageTransition>
    )
  }

}

export default Season;