import { object, number, bool } from 'prop-types';

export const propTypes = {
  loading: bool.isRequired,
  tvSeason: object.isRequired,
  tvId: number.isRequired,
};

export const defaultProps = {
};
