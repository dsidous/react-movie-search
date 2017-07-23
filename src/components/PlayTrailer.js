import React, { Component } from 'react';
import ModalVideo from 'react-modal-video'

import 'react-modal-video/css/modal-video.min.css';

class PlayTrailer extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen : false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <div>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.video.key} onClose={() => this.setState({isOpen: false})} />
        <button onClick={this.openModal}>Open</button>
      </div>
    )
  }

}

export default PlayTrailer;
