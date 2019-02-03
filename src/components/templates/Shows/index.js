import React, { Component } from 'react';

import { propTypes, contextTypes } from './propTypes';
import Filter from '../../organisms/Filter';
import Result from '../../molecules/Result';
import Spinner from '../../atoms/Spinner';
import PageTransition from '../../atoms/PageTransition';

class Shows extends Component {
  static propTypes = propTypes;

  static contextTypes = contextTypes;

  queryUpdate = (newQuery) => {
    const { media } = this.props;
    const { router } = this.context;

    router.history.push(`/${media}?${newQuery}`);
  };

  render() {
    const { loading, genresLoading, configLoading } = this.props;

    if (loading || genresLoading || configLoading) {
      return <Spinner />;
    }

    const { media, genres, query } = this.props;

    return (
      <PageTransition>
        <Filter
          query={query}
          genres={genres}
          queryUpdate={this.queryUpdate}
          media={media}
        >
          <Result {...this.props} media={media} />
        </Filter>
      </PageTransition>
    );
  }
}

export default Shows;
