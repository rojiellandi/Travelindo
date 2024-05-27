import React from 'react';

const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className={`col-span-${
            index % 4 === 0 || index % 4 === 3 ? "2" : "1"
          } row-span-1 relative`}
        >
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={image.src}
              alt={`image-${index}`}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute bottom-4 left-0 w-full  text-white text-center p-2">
              <p className='text-5xl'>{image.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;

