import React from 'react';
import Tag from './Tag';

const Detail = () => {
  const { name, image_url } = {
    product_code: 15,
    name: '니트_115',
    image_url: 'https://static.pxl.ai/problem/images/KN-115.jpg',
    price: 17952,
    category_names: ['c1.tops', 'c2.tops', 'c3.knitwear'],
  };

  const regionData = {
    product_code: 33,
    region_id: 3139,
    image_url: 'https://static.pxl.ai/problem/images/BL-120.jpg',
    gender: 'gender.male',
    attributes: [
      {
        style: 'classic',
      },
      {
        season: 'autumn',
      },
      {
        occasion: 'winter',
      },
      {
        fabric: 'none',
      },
      {
        sense: 'unsupported',
      },
      {
        pattern: 'camouflage',
      },
    ],
    category_names: ['c1.tops', 'c2.tops', 'c3.blouses'],
  };
  return (
    <div className="m-6 w-3/12">
      <div className="min-w-120 h-100 bg-gray-200">
        <img
          src={image_url}
          alt={name}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="py-3">
        <div className="font-bold">ITEMS</div>
        <div className="py-2">
          <span className="text-white bg-purple-700 px-2 py-1">onepiece</span>
        </div>
      </div>
      <div className="py-3">
        <div className="font-bold">ATTRIBUTES</div>
        <div className="py-2 flex flex-wrap">
          <Tag tagName="gender" value={regionData.gender.slice(7)} />
          {regionData.category_names.map((cate, idx) => (
            <Tag
              tagName={idx === 0 ? 'category' : 'sub_category'}
              value={cate}
            />
          ))}
          {regionData.attributes.map((attr) => {
            const tagName = Object.keys(attr)[0];
            const value = Object.values(attr)[0];
            return <Tag tagName={tagName} value={value} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;
