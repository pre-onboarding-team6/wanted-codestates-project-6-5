import React from 'react';
import keywordSet from '../lang/keyword.json';

const ItemCard = ({ name, imageUrl, price, searchWord }) => {
  const highlistKeyword = (word) => {
    const [name, number] = word.split('_');
    const nameKeyword = keywordSet[name] ? keywordSet[name][0] : '';
    const searchKeywords = keywordSet[searchWord];

    return searchKeywords?.includes(nameKeyword) ? (
      <>
        <strong>{name}</strong>_{number}
      </>
    ) : (
      word
    );
  };

  return (
    <div className="flex flex-col shadow-lg group">
      <div className="flex-1 overflow-hidden bg-gray-200 min-w-60 round-md group-hover:opacity-75 ">
        <a href={imageUrl}>
          <img
            src={imageUrl}
            alt={name}
            className="object-cover object-center w-full h-full"
          />
        </a>
      </div>
      <div className="relative flex flex-col mx-2 my-3 h-11">
        <h3 className="text-sm text-gray-700">{highlistKeyword(name)}</h3>
        <p className="absolute bottom-0 right-0 text-sm font-medium text-violet-700">
          ₩{price}
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
