import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import serchItems from '../utils/serchItems';
import keywordSet from '../lang/keyword.json';

const SearchHome = () => {
  const [searchWord, setSearchWord] = useState('');
  const { loading: ploading, data: productsData } = useFetch({
    requestUrl: 'https://static.pxl.ai/problem/data/products.json',
  });
  const { loading: rloading, data: regionsData } = useFetch({
    requestUrl: 'https://static.pxl.ai/problem/data/regions.json',
  });

  const [list, setList] = useState([]);
  const { distinguishKeyword } = serchItems({
    ploading,
    productsData,
    rloading,
    regionsData,
    searchWord,
    setList,
    keywordSet,
  });

  const handleChange = (e) => setSearchWord(e.target.value);

  const handleSearch = () => {
    // 엔터를 누르거나 검색 버튼을 클릭했을 때의 동작
    distinguishKeyword();
  };
  console.log(list);

  return (
    <div className="h-screen w-screen relative">
      <header className="px-7 py-5">
        <img
          className="h-10 cursor-pointer"
          alt="pxl"
          src="https://sun-learning-ff8.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc0b49070-f848-4e56-98fc-7ff9d972a855%2Flogo_pxl_b.png?table=block&id=7c93a0fb-5499-4d9b-97c1-c2f7e0561785&spaceId=06605955-0fd9-4614-ba9a-0812be412dbe&width=470&userId=&cache=v2"
        />
      </header>
      <main className="h-screen w-screen absolute top-0 left-0 flex flex-col justify-center items-center">
        <div className="mb-16 text-4xl text-gray-600 flex flex-col items-center leading-tight">
          <div className="font-bold">Artificial Intelligence</div>
          <div>
            PXL <span className="font-bold">Fashion</span> Viewer
          </div>
        </div>
        <div className="w-11/12 flex items-center flex-col justify-center sm:flex-row md:w-2/3 lg:w-5/12">
          <input
            type="text"
            value={searchWord}
            onChange={handleChange}
            onKeyUp={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
            placeholder="IMAGE URL or KEYWORD"
            className="flex-1 py-3 px-7 w-full rounded-full border-2 shadow-lg"
          />
          <button
            type="button"
            className="h-11 mt-5 w-20 sm:ml-5 sm:mt-0 rounded-md bg-gray-300 sm:w-16"
            onClick={handleSearch}
          >
            검색
          </button>
        </div>
      </main>
    </div>
  );
};

export default SearchHome;
