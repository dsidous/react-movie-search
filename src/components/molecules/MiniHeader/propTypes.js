import { string } from 'prop-types';

export const propTypes = {
  title: string.isRequired,
  release_date: string.isRequired,
  poster_path: string.isRequired,
  link: string.isRequired,
  linkCopy: string.isRequired,
};

export const defaultProps = {};
