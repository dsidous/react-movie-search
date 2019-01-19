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
  size: number,
  mediaType: string.isRequired,
  configLoading: bool.isRequired,
};

export const defaultProps = {
};