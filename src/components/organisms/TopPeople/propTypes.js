import { number, array, func } from 'prop-types';

export const propTypes = {
  page: number.isRequired,
  toppeople: array.isRequired,
  handlePageSelect: func.isRequired,
};

export const defaultProps = {};
