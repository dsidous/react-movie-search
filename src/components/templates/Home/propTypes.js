import {
  array,
  bool,
  object,
  oneOfType,
} from 'prop-types';

export const propTypes = {
  popular: array.isRequired,
  nowPlayingLoading: bool,
  popularLoading: bool,
  upcomingLoading: bool,
  nowplaying: oneOfType([object, array]),
  upcoming: oneOfType([object, array]),
};

export const defaultProps = {
  nowplaying: [],
  upcoming: [],
};
