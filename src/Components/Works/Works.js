import React from 'react';
import PhotoAlbum from "react-photo-album";
import img1 from '../../album/pexels-abigail-olarte-6011998.jpg'
import img2 from '../../album/pexels-tima-miroshnichenko-5560377.jpg'
import img3 from '../../album/pexels-pixabay-265722.jpg'
const Works = () => {
  const photos = [
    { src: img1, width: 1920, height: 2280 },
    { src: img2, width: 1920, height: 1280 },
    { src: img3, width: 1920, height: 2880 },
];
  return (
    <div>
      <h1 className='text-center text-xl font-bold my-8'>Checkout Some of my Works</h1>
       <PhotoAlbum layout="rows" photos={photos} />;
    </div>
  );
};

export default Works;