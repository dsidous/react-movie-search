import React from 'react';

import { propTypes, contextTypes } from './propTypes';
import Filter from '../../organisms/Filter';
import Result from '../../molecules/Result';
import Spinner from '../../atoms/Spinner';
import PageTransition from '../../atoms/PageTransition';

const Shows = (props, context) => {
  const { loading, genresLoading, configLoading } = props;

  if (loading || genresLoading || configLoading) {
    return <Spinner />;
  }

  const { media, genres, query } = props;

  const queryUpdate = (newQuery) => {
    context.router.history.push(`/${media}?${newQuery}`);
  };

  return (
    <PageTransition>
      <Filter
        query={query}
        genres={genres}
        queryUpdate={queryUpdate}
        media={media}
      >
        <Result {...props} media={media} />
      </Filter>
    </PageTransition>
  );
};

Shows.propTypes = propTypes;
Shows.contextTypes = contextTypes;

export default Shows;
