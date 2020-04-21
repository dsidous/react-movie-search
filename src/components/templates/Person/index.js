import React from 'react';
import { IntlProvider } from 'react-intl';

import { propTypes } from './propTypes';
import Spinner from '../../atoms/Spinner';
import PageTransition from '../../atoms/PageTransition/index';
import PersonProfile from '../../organisms/PersonProfile';

const Person = props => {
  const { loading } = props;

  if (loading) {
    return <Spinner />;
  }

  const { person } = props;

  return (
    <PageTransition>
      <IntlProvider locale={navigator.language}>
        <PersonProfile person={person} />
      </IntlProvider>
    </PageTransition>
  );
};

Person.propTypes = propTypes;

export default Person;
