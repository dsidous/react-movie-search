import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import { propTypes } from './propTypes';

const PageTransition = props => {
  const { children } = props;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <CSSTransition in={loaded} timeout={1000} classNames="fade">
      <div>{children}</div>
    </CSSTransition>
  );
};

PageTransition.propTypes = propTypes;

export default PageTransition;
