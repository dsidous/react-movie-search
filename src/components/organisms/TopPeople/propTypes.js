import { object, array, func } from 'prop-types';

export const propTypes = {
  state: object.isRequired,
  toppeople: array.isRequired,
  handlePageSelect: func.isRequired,
};

export const defaultProps = {
};
