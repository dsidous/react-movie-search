import { number, object } from 'prop-types';

export const propTypes = {
  tvId: number.isRequired,
  season: object.isRequired,
};

export const defaultProps = {};
