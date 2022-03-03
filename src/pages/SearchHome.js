import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import searchItems from '../utils/searchItems';
import keywordSet from '../lang/keyword.json';
import { useNavigate } from 'react-router-dom';

const SearchHome = ({ setList, setDataType, setDetailItem }) => {
  const navigate = useNavigate();
  const [searchWord, setSearchWord] = useState('');
  const { loading: ploading, data: productsData } = useFetch({
    requestUrl: 'https://static.pxl.ai/problem/data/products.json',
  });
  const { loading: rloading, data: regionsData } = useFetch({
    requestUrl: 'https://static.pxl.ai/problem/data/regions.json',
  });

  const { distinguishKeyword } = searchItems({
    ploading,
    productsData,
    rloading,
    regionsData,
    searchWord,
    setList,
    setDataType,
    setDetailItem,
    keywordSet,
  });

  const handleChange = (e) => setSearchWord(e.target.value);

  const handleSearch = () => {
    if (searchWord === '') return;
    // 엔터를 누르거나 검색 버튼을 클릭했을 때의 동작
    distinguishKeyword();
    navigate('/search');
  };

  return (
    <div className="relative w-screen h-screen">
      <header className="py-5 px-7">
        <img
          className="h-10 cursor-pointer"
          alt="pxl"
          src="https://sun-learning-ff8.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc0b49070-f848-4e56-98fc-7ff9d972a855%2Flogo_pxl_b.png?table=block&id=7c93a0fb-5499-4d9b-97c1-c2f7e0561785&spaceId=06605955-0fd9-4614-ba9a-0812be412dbe&width=470&userId=&cache=v2"
        />
      </header>
      <main className="absolute top-0 left-0 flex flex-col items-center justify-center w-screen h-screen">
        <div className="flex flex-col items-center mb-16 text-4xl leading-tight text-gray-600">
          <div className="font-bold">Artificial Intelligence</div>
          <div>
            PXL <span className="font-bold">Fashion</span> Viewer
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-11/12 sm:flex-row md:w-2/3 lg:w-5/12">
          <input
            type="text"
            value={searchWord}
            onChange={handleChange}
            onKeyUp={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
            placeholder="IMAGE URL or KEYWORD"
            className="flex-1 w-full py-3 border-2 rounded-full shadow-lg px-7"
          />
          <button
            type="button"
            className="w-20 mt-5 bg-gray-300 rounded-md h-11 sm:ml-5 sm:mt-0 sm:w-16"
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
