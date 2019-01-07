import React from 'react';
import Season from '../Season';

const LastSeason = ({season, config, handleSeasonsClick}) => (
  <div className="last-season">
    <h4>Last season</h4>
    <Season season={season} config={config} />
    <button className="all-seasons-btn" onClick={handleSeasonsClick}>View All Seasons</button>
  </div>
);

export default LastSeason;