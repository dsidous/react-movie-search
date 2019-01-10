import React from 'react';
import withConfig from '../../queries/withConfig';

const MediaImage = ({
  config:{images}, 
  filePath, 
  name, 
  size, 
  mediaType, 
  configLoading,
  ...otherProps
}) => {
  const sizePath = (mediaType === 'miniProfile') 
    ? "w132_and_h132_face/" 
    : images[`${mediaType}_sizes`][size];

  const imageUrl = `${images.secure_base_url}${sizePath}${filePath}`; 
  
  return (
    <img src={imageUrl} alt={name} {...otherProps} />
  );
};

export default withConfig()(MediaImage);