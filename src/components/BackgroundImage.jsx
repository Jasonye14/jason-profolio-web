import React from 'react';
import heroBackground from '../images/heroBackground.jpg';

function BackgroundImage() {
  return (
    <div style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'absolute', // This will make it cover the whole viewport
      opacity: 0.9,
      top: 150,
      left: 0,
      right: 0,
      bottom: 0
    }} />
  );
}

export default BackgroundImage;
