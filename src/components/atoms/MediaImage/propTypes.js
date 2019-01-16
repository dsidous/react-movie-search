import {
  object,
  string,
  bool,
  number,
} from 'prop-types';

export const propTypes = {
  config: object.isRequired,
  filePath: string,
  name: string,
  size: number.isRequired,
  mediaType: string.isRequired,
  configLoading: bool.isRequired,
};

export const defaultProps = {
};
