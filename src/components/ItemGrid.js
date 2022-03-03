import React from 'react';
import ItemCard from './ItemCard';
const data = [
  {
    product_code: 1,
    name: '조끼_070',
    image_url: 'https://static.pxl.ai/problem/images/VT-070.jpg',
    price: 45065,
    category_names: ['c1.tops', 'c2.outwears', 'c3.vests'],
  },
  {
    product_code: 2,
    name: '원피스_019',
    image_url: 'https://static.pxl.ai/problem/images/OP-019.jpg',
    price: 34592,
    category_names: ['c1.onepiece', 'c2.dresses', ''],
  },
  {
    product_code: 3,
    name: '자켓_093',
    image_url: 'https://static.pxl.ai/problem/images/JK-093.jpg',
    price: 20544,
    category_names: ['c1.tops', 'c2.outwears', 'c3.jackets'],
  },
  {
    product_code: 4,
    name: '자켓_087',
    image_url: 'https://static.pxl.ai/problem/images/JK-087.jpg',
    price: 23371,
    category_names: ['c1.tops', 'c2.outwears', 'c3.jackets'],
  },
  {
    product_code: 5,
    name: '조끼_064',
    image_url: 'https://static.pxl.ai/problem/images/VT-064.jpg',
    price: 33901,
    category_names: ['c1.tops', 'c2.outwears', 'c3.vests'],
  },
  {
    product_code: 6,
    name: '원피스_025',
    image_url: 'https://static.pxl.ai/problem/images/OP-025.jpg',
    price: 18965,
    category_names: ['c1.onepiece', 'c2.dresses', ''],
  },
  {
    product_code: 7,
    name: '바지_217',
    image_url: 'https://static.pxl.ai/problem/images/PT-217.jpg',
    price: 22797,
    category_names: ['c1.bottoms', 'c2.pants', 'c3.pants'],
  },
  {
    product_code: 8,
    name: '조끼_058',
    image_url: 'https://static.pxl.ai/problem/images/VT-058.jpg',
    price: 29103,
    category_names: ['c1.tops', 'c2.outwears', 'c3.vests'],
  },
  {
    product_code: 9,
    name: '원피스_031',
    image_url: 'https://static.pxl.ai/problem/images/OP-031.jpg',
    price: 39983,
    category_names: ['c1.onepiece', 'c2.dresses', ''],
  },
  {
    product_code: 10,
    name: '바지_203',
    image_url: 'https://static.pxl.ai/problem/images/PT-203.jpg',
    price: 38292,
    category_names: ['c1.bottoms', 'c2.pants', 'c3.pants'],
  },
  {
    product_code: 11,
    name: '코트_088',
    image_url: 'https://static.pxl.ai/problem/images/CT-088.jpg',
    price: 22110,
    category_names: ['c1.tops', 'c2.outwears', 'c3.coats'],
  },
  {
    product_code: 12,
    name: '코트_063',
    image_url: 'https://static.pxl.ai/problem/images/CT-063.jpg',
    price: 46796,
    category_names: ['c1.tops', 'c2.outwears', 'c3.coats'],
  },
  {
    product_code: 13,
    name: '점퍼_239',
    image_url: 'https://static.pxl.ai/problem/images/JP-239.jpg',
    price: 43583,
    category_names: ['c1.tops', 'c2.outwears', 'c3.outer'],
  },
  {
    product_code: 14,
    name: '자켓_050',
    image_url: 'https://static.pxl.ai/problem/images/JK-050.jpg',
    price: 11683,
    category_names: ['c1.tops', 'c2.outwears', 'c3.jackets'],
  },
  {
    product_code: 15,
    name: '니트_115',
    image_url: 'https://static.pxl.ai/problem/images/KN-115.jpg',
    price: 17952,
    category_names: ['c1.tops', 'c2.tops', 'c3.knitwear'],
  },
  {
    product_code: 16,
    name: '니트_101',
    image_url: 'https://static.pxl.ai/problem/images/KN-101.jpg',
    price: 30487,
    category_names: ['c1.tops', 'c2.tops', 'c3.knitwear'],
  },
  {
    product_code: 17,
    name: '자켓_044',
    image_url: 'https://static.pxl.ai/problem/images/JK-044.jpg',
    price: 43408,
    category_names: ['c1.tops', 'c2.outwears', 'c3.jackets'],
  },
  {
    product_code: 18,
    name: '코트_077',
    image_url: 'https://static.pxl.ai/problem/images/CT-077.jpg',
    price: 36850,
    category_names: ['c1.tops', 'c2.outwears', 'c3.coats'],
  },
  {
    product_code: 17,
    name: '자켓_044',
    image_url: 'https://static.pxl.ai/problem/images/JK-044.jpg',
    price: 43408,
    category_names: ['c1.tops', 'c2.outwears', 'c3.jackets'],
  },
  {
    product_code: 18,
    name: '코트_077',
    image_url: 'https://static.pxl.ai/problem/images/CT-077.jpg',
    price: 36850,
    category_names: ['c1.tops', 'c2.outwears', 'c3.coats'],
  },
  {
    product_code: 17,
    name: '자켓_044',
    image_url: 'https://static.pxl.ai/problem/images/JK-044.jpg',
    price: 43408,
    category_names: ['c1.tops', 'c2.outwears', 'c3.jackets'],
  },
  {
    product_code: 18,
    name: '코트_077',
    image_url: 'https://static.pxl.ai/problem/images/CT-077.jpg',
    price: 36850,
    category_names: ['c1.tops', 'c2.outwears', 'c3.coats'],
  },
];

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
