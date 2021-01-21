import React from 'react';

const Guarantee = ({ img, title, description }) => (
  <div style={{ flex: 1, padding: '1rem' }}>
    {/* 
    Take the images from 'public/images' folder
    */}
    <img src={`${process.env.PUBLIC_URL}/images/${img}.png`} alt={title} />
    <p>{title}</p>
    <p>{description}</p>
  </div>
);

export default Guarantee;
