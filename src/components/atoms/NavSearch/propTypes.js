import { object, string } from 'prop-types';

export const propTypes = {
  config: object.isRequired,
  history: object.isRequired,
};

export const itemsProps = {
  index: string.isRequired,
  option: object.isRequired,
  config: object.isRequired,
  highlightedIndex: string.isRequired,
  getItemProps: object.isRequired,
};
