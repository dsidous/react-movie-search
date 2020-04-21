import { string, object } from 'prop-types';

export const propTypes = {
  img_base_path: string,
  movie: object.isRequired,
  media: string,
};

export const defaultProps = {};
