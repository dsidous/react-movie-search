import React, { Component } from 'react'
import ModalVideo from 'react-modal-video'
import PropTypes from 'prop-types'

import 'react-modal-video/css/modal-video.min.css'

class PlayTrailer extends Component {
  state = {
    isOpen : false
  }

  static propTypes = {
    video: PropTypes.object
  }

  openModal = () => {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <div>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.video.key} onClose={() => this.setState({isOpen: false})} />
        <button className="play-trailer" onClick={this.openModal}>
          <span className="fa fa-play-circle-o"></span>
          Play Trailer
        </button>
      </div>
    )
  }

}

export default PlayTrailer;
