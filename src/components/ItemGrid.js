import React from 'react';
import ItemCard from './ItemCard';

const ItemGrid = ({ list }) => {
  return (
    <div className="grid grid-cols-2 m-6 gap-y-10 gap-x-6 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 xl:gap-x-8">
      {list?.map((item, idx) => (
        <ItemCard key={idx} {...item} imageUrl={item.image_url} />
      ))}
    </div>
  );
};

export default ItemGrid;
