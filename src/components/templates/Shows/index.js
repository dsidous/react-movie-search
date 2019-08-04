import React, { useState } from 'react';

import { propTypes } from './propTypes';
import Filter from '../../organisms/Filter';
import Result from '../../molecules/Result';
import Spinner from '../../atoms/Spinner';
import PageTransition from '../../atoms/PageTransition';

const Shows = ({
  media,
  genres,
  loading,
  genresLoading,
  configLoading,
}) => {
  const [query, queryUpdate] = useState('');

  if (loading || genresLoading || configLoading) {
    return <Spinner />;
  }

  return (
    <PageTransition>
      <Filter
        genres={genres}
        queryUpdate={queryUpdate}
        media={media}
      >
        <Result
          query={query}
          media={media}
        />
      </Filter>
    </PageTransition>
  );
};

export default Shows;
