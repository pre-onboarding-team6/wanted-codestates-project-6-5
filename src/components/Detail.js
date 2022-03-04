import React from 'react';
import Tag from './Tag';

const Detail = ({ item }) => {
  const { image_url, name, category_names, gender, attributes } = item[0];

  return (
    <div className="m-6 sm:w-4/12 md:w-2/12">
      <div className="bg-gray-200 min-w-120 h-[30rem]">
        <img
          src={image_url}
          alt={name}
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="py-3">
        <div className="font-bold">ITEMS</div>
        <div className="py-2">
          <span className="px-2 py-1 text-white bg-purple-700">
            {category_names[0].split('.')[1]}
          </span>
        </div>
      </div>
      <div className="py-3">
        <div className="font-bold">ATTRIBUTES</div>
        <div className="flex flex-wrap py-2">
          <Tag tagName="gender" value={gender.slice(7)} />
          {category_names
            .filter((cate) => cate.length > 0)
            .map((cate, idx) => (
              <Tag
                key={idx}
                tagName={idx === 0 ? 'category' : 'sub_category'}
                value={cate.slice(3)}
              />
            ))}
          {attributes.map((attr, idx) => {
            const tagName = Object.keys(attr)[0];
            const value = Object.values(attr)[0];
            return (
              <Tag
                key={idx}
                tagName={attr.tagName ? '' : tagName}
                value={attr.tagName ? '' : value}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
