import { array, object, func } from 'prop-types';

export const propTypes = {
  config: object.isRequired,
  show: object.isRequired,
  dcolor: array.isRequired,
  handleShowClick: func.isRequired,
  handleFullCrewClick: func.isRequired,
};

export const defaultProps = {};
