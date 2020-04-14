import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { propTypes } from './propTypes';

import 'react-modal-video/css/modal-video.min.css';

const PlayTrailer = ({ video: { key } }) => {
  const [isOpen, setIsopen] = useState(false);

  const openModal = () => {
    setIsopen(true);
  };

  return (
    <div className="play-trailer-wrapper">
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={key}
        onClose={() => setIsopen(false)}
      />
      <button type="button" className="play-trailer" onClick={openModal}>
        <span>
          <i className="fa fa-angle-right" />
          {' Watch Trailer'}
        </span>
      </button>
    </div>
  );
};

PlayTrailer.propTypes = propTypes;

export default PlayTrailer;
