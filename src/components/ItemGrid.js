import React from 'react';
// import ItemCard from './ItemCard';

const ItemGrid = ({ list, searchWord }) => {
  return (
    <div className="grid grid-cols-2 m-6 md:w-9/12 auto-rows-[23rem] gap-y-10 gap-x-6 sm:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
      {list.length > 0 ? (
        list.map((item, idx) => (
          <ItemCard
            key={idx}
            {...item}
            imageUrl={item.image_url}
            searchWord={searchWord}
          />
        ))
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
    </div>
  );
};

export default ItemGrid;
