import { object, string, bool, number } from 'prop-types';

export const propTypes = {
  config: object,
  filePath: string,
  name: string,
  size: number,
  mediaType: string.isRequired,
  configLoading: bool,
};

export const defaultProps = {};
