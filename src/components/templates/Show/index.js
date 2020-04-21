/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import * as Vibrant from 'node-vibrant';
import { useHistory } from 'react-router-dom';

import { propTypes } from './propTypes';
import Spinner from '../../atoms/Spinner';
import PageTransition from '../../atoms/PageTransition/index';
import ShowProfile from '../../organisms/ShowProfile';

const Show = ({ loading, show, config }) => {
  const history = useHistory();
  const media = show.name ? 'tv' : 'movie';

  const [dcolor, setDcolor] = useState([0, 0, 0]);

  const handleShowClick = showId => {
    history.push(`/${media}/${showId}`);
  };

  const handleFullCrewClick = () => {
    const { id } = show;
    history.push(`/${media}/${id}/crew`);
  };

  useEffect(() => {
    const getPalette = async () => {
      const { poster_path } = show;
      const { images } = config;
      const path = images.base_url + images.poster_sizes[3] + poster_path;
      const palette = await Vibrant.from(path).getPalette();
      // eslint-disable-next-line no-underscore-dangle
      await setDcolor(palette.DarkVibrant._rgb);
    };

    if (!loading) {
      getPalette();
    }
  }, [loading, config, show]);

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
          handleShowClick={handleShowClick}
          handleFullCrewClick={handleFullCrewClick}
        />
      </PageTransition>
    </div>
  );
};

Show.propTypes = propTypes;

export default Show;
