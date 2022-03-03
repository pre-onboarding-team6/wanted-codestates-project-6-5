import React from 'react';

const ItemCard = ({ name, imageUrl, price }) => {
  return (
    <div className="group shadow-lg">
      <div className="min-w-60 h-60 bg-gray-200 round-md overflow-hidden group-hover:opacity-75 ">
        <a href={imageUrl}>
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-center object-cover"
          />
        </a>
      </div>
      <div className="my-3 mx-2 flex flex-col relative h-11">
        <h3 className="text-sm text-gray-700">{name}</h3>
        <p className="text-sm font-medium text-violet-700 absolute right-0 bottom-0">
          ₩{price}
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
