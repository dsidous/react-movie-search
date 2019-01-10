import React from 'react';
import withConfig from '../../queries/withConfig';

import NoImage from '../../../images/noimage.jpg';

const MediaImage = ({
  config:{images}, 
  filePath, 
  name, 
  size, 
  mediaType, 
  configLoading,
  ...otherProps
}) => {

  let imageUrl = NoImage;

  if (filePath !== null) {
    const sizePath = (mediaType === 'miniProfile') 
      ? "w132_and_h132_face/" 
      : images[`${mediaType}_sizes`][size];

    imageUrl = `${images.secure_base_url}${sizePath}${filePath}`; 
  } 

  return (
    <img src={imageUrl} alt={name} {...otherProps} />
  );
};

export default withConfig()(MediaImage);