import React, { Component } from 'react';

import { propTypes, contextTypes } from './propTypes';
import Spinner from '../../atoms/Spinner';
import PageTransition from '../../atoms/PageTransition/index';
import SEO from '../../atoms/SEO';
import TopPeopleProfile from '../../organisms/TopPeople';

export default class TopPeople extends Component {
  static propTypes = propTypes;

  static contextTypes = contextTypes;

  constructor(props) {
    super(props);

    const params = new URLSearchParams(props.location.search);
    const page = parseInt(params.get('page'), 10);

    this.state = {
      page: page || 1,
    };
  }

  handlePageSelect = (e) => {
    const { router } = this.context;
    if (e > 0) {
      this.setState({ page: e }, () => {
        const { page } = this.state;
        router.history.push(`/person?page=${page}`);
      });
    }
  };

  render() {
    const { loading } = this.props;

    if (loading) {
      return <Spinner />;
    }

    const { toppeople } = this.props;
    const { page } = this.state;
    return (
      <PageTransition>
        <SEO title="Popular people" />
        <div>
          <PageTransition>
            <TopPeopleProfile
              page={page}
              toppeople={toppeople}
              handlePageSelect={this.handlePageSelect}
            />
          </PageTransition>
        </div>
      </PageTransition>
    );
  }
}
