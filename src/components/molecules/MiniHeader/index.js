/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';

import { propTypes } from './propTypes';
import MediaImage from '../../atoms/MediaImage';

const MiniHeader = ({ title, release_date, poster_path, link, linkCopy }) => (
  <div className="mini-header">
    <div className="mini-header__inner">
      <MediaImage
        mediaType="poster"
        size={1}
        filePath={poster_path}
        name={title}
      />
      <div className="mini-header__info">
        <h2>
          {title}
          &nbsp;
          <span>{release_date.slice(0, 4)}</span>
        </h2>
        <h4>
          <Link to={link}>
            &#8592;
            {linkCopy}
          </Link>
        </h4>
      </div>
    </div>
  </div>
);

MiniHeader.propTypes = propTypes;

export default MiniHeader;
