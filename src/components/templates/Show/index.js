/* eslint-disable camelcase */
import React, { Component } from 'react';
import * as Vibrant from 'node-vibrant';

import { propTypes, contextTypes } from './propTypes';
import Spinner from '../../atoms/Spinner';
import PageTransition from '../../atoms/PageTransition/index';
import ShowProfile from '../../organisms/ShowProfile';

export default class Show extends Component {
  static propTypes = propTypes;

  static contextTypes = contextTypes;

  state = {
    dcolor: [0, 0, 0],
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loading) {
      this.getPalette(nextProps);
    }
  }

  getPalette = async (nextProps) => {
    const { show: { poster_path }, config: { images } } = nextProps;
    const path = images.base_url + images.poster_sizes[3] + poster_path;
    const palette = await Vibrant.from(path).getPalette();
    // eslint-disable-next-line no-underscore-dangle
    await this.setState({ dcolor: palette.DarkVibrant._rgb });
  };

  handleShowClick = (showId) => {
    const { router } = this.context;
    const { show: { name } } = this.props;
    const media = name ? 'tv' : 'movie';
    router.history.push(`/${media}/${showId}`);
  };

  handleFullCrewClick = () => {
    const { router } = this.context;
    const { show: { id, name } } = this.props;
    const media = name ? 'tv' : 'movie';
    router.history.push(`/${media}/${id}/crew`);
  };

  render() {
    const { loading, show, config } = this.props;
    const { dcolor } = this.state;

    if (loading) {
      return <Spinner />;
    }

    return (
      <div>
        <PageTransition>
          <ShowProfile
            key={show.id}
            config={config}
            show={show}
            dcolor={dcolor}
            handleShowClick={this.handleShowClick}
            handleFullCrewClick={this.handleFullCrewClick}
          />
        </PageTransition>
      </div>
    );
  }
}
