import React from 'react';

const  GaleriGrid = ({ images }) => {
  // Ambil 5 gambar pertama dari prop images
  const slicedImages = images.slice(0, 5);

  return (
    <div className="grid grid-cols-6 ">
      {/* Render 3 gambar di atas */}
      {slicedImages.slice(0, 3).map((image, index) => (
        <div
          key={index}
          className={`col-span-2 row-span-1 relative`}
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={image.src}
              alt={`image-${index}`}
              className="w-full h-full object-cover"
            />
        
          </div>
        </div>
      ))}
      {/* Render 2 gambar di bawah */}
      {slicedImages.slice(3).map((image, index) => (
        <div
          key={index + 3}
          className={`col-span-3 row-span-1 relative`}
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={image.src}
              alt={`image-${index + 3}`}
              className="w-full h-full object-cover"
            />
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default GaleriGrid ;
