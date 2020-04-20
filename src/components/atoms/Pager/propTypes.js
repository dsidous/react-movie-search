import { func, number } from 'prop-types';

export const propTypes = {
  page: number.isRequired,
  handlePageSelect: func.isRequired,
};

export const defaultProps = {};
