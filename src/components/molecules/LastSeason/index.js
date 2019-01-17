import React from 'react';

import { propTypes, contextTypes } from './propTypes';
import Season from '../Season';

const LastSeason = ({ tvId, season }, context) => {
  const handleSeasonsClick = () => context.router.history.push(`/tv/${tvId}/seasons`);

  return (
    <div className="last-season">
      <h4>Last season</h4>
      <Season season={season} tvId={tvId} />
      <button
        type="button"
        className="all-seasons-btn"
        onClick={handleSeasonsClick}
      >
        View All Seasons
      </button>
    </div>
  );
};

LastSeason.contextTypes = contextTypes;
LastSeason.propTypes = propTypes;

export default LastSeason;
