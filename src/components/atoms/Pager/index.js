import React from "react";
import { Pager } from "react-bootstrap";

const MyPager = (props) => (
  <Pager>
    <Pager.Item
      previous
      eventKey={props.page - 1}
      href="#"
      onSelect={props.handlePageSelect}
    >
      &larr; Previous
    </Pager.Item>
    <Pager.Item
      next
      eventKey={props.page + 1}
      onSelect={props.handlePageSelect}
    >
      Next &rarr;
    </Pager.Item>
  </Pager>
)

export default MyPager;