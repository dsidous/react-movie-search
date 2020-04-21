/* eslint-disable camelcase */
import React from 'react';

import { propTypes } from './propTypes';
import Spinner from '../../atoms/Spinner';
import FullCastCrew from '../../molecules/FullCastCrew';
import PageTransition from '../../atoms/PageTransition';
import MiniHeader from '../../molecules/MiniHeader';

const CastCrew = ({ show, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  const { id, title, name, release_date, first_air_date, poster_path } = show;
  const media = name ? 'tv' : 'movie';

  return (
    <PageTransition>
      <MiniHeader
        title={title || name}
        release_date={release_date || first_air_date}
        poster_path={poster_path}
        link={`/${media}/${id}`}
        linkCopy="Back to main"
      />
      <FullCastCrew movie={show} />
    </PageTransition>
  );
};

CastCrew.propTypes = propTypes;

export default CastCrew;
