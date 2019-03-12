import React from 'react';
import { Pager } from 'react-bootstrap';

import { propTypes } from './propTypes';

const MyPager = ({ page, handlePageSelect }) => (
  <Pager>
    <Pager.Item
      previous
      eventKey={page - 1}
      href="#"
      onClick={() => handlePageSelect(page - 1)}
    >
      &larr; Previous
    </Pager.Item>
    <Pager.Item
      next
      eventKey={page + 1}
      onClick={() => handlePageSelect(page + 1)}
    >
      Next &rarr;
    </Pager.Item>
  </Pager>
);

MyPager.propTypes = propTypes;

export default MyPager;
