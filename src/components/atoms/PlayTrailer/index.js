import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import { propTypes } from './propTypes';

import 'react-modal-video/css/modal-video.min.css';

class PlayTrailer extends Component {
  static propTypes = propTypes;

  state = {
    isOpen: false,
  }

  openModal = () => {
    this.setState({ isOpen: true });
  }

  render() {
    const { isOpen } = this.state;
    const { video: { key } } = this.props;
    return (
      <div className="play-trailer-wrapper">
        <ModalVideo
          channel="youtube"
          isOpen={isOpen}
          videoId={key}
          onClose={() => this.setState({ isOpen: false })}
        />
        <button type="button" className="play-trailer" onClick={this.openModal}>
          <span className="fa fa-angle-right"> Watch Trailer </span>
        </button>
      </div>
    );
  }
}

export default PlayTrailer;
