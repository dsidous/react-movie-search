import React from 'react';
import { Helmet } from 'react-helmet';

import { contextTypes, propTypes } from './propTypes';

const SEO = ({ title }, { router }) => {
  const subTitle = router.history.location.pathname !== '/'
    ? ` - ${title}`
    : null;

  const fullTitle = `Movie Search${subTitle}`;

  return <Helmet title={fullTitle} />;
};

SEO.contextTypes = contextTypes;
SEO.propTypes = propTypes;

export default SEO;
