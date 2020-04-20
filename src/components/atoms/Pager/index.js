import React from 'react';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core/styles';

import { propTypes } from './propTypes';

const useStyles = makeStyles(theme => ({
  pager: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: `${theme.spacing(2)}px 0`,
  },
}));

const MyPager = ({ page, handlePageSelect }) => {
  const classes = useStyles();

  return (
    <div className={classes.pager}>
      <Button onClick={() => handlePageSelect(page - 1)}>
        <KeyboardArrowLeft />
        Previous
      </Button>
      <Button onClick={() => handlePageSelect(page + 1)}>
        Next
        <KeyboardArrowRight />
      </Button>
    </div>
  );
};

MyPager.propTypes = propTypes;

export default MyPager;
