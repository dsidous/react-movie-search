import React from 'react';
import { Link } from 'react-router-dom';

import { propTypes } from './propTypes';
import Season from '../Season';

const LastSeason = ({ tvId, season }) => (
  <div className="last-season">
    <h4>Last season</h4>
    <Season season={season} tvId={tvId} />
    <Link to={`/tv/${tvId}/seasons`} className="all-seasons-btn">
      View All Seasons
    </Link>
  </div>
);

LastSeason.propTypes = propTypes;

export default LastSeason;
