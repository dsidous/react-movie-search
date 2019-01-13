import React from 'react';
import PropTypes from "prop-types";

import Season from '../Season';

const LastSeason = ({ tvId, season, config }, context) => {

  const handleSeasonsClick = () => {
    context.router.history.push(`/tv/${tvId}/seasons`);
  };

  return (
    <div className="last-season">
      <h4>Last season</h4>
      <Season season={season} config={config} tvId={tvId} />
      <button className="all-seasons-btn" onClick={handleSeasonsClick}>View All Seasons</button>
    </div>
  )
};

LastSeason.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LastSeason;