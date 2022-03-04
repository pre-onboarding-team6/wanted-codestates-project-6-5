import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SearchHome = () => {
  const navigate = useNavigate();
  const [searchWord, setSearchWord] = useState('');

  const handleChange = (e) => setSearchWord(e.target.value);

  const handleSearch = () => {
    if (searchWord === '') return;
    navigate({
      pathname: '/search',
      search: `?keyword=${searchWord}&page=1`,
    });
  };

  const onMoveCanvas = () => {
    navigate('/canvas');
  };

  return (
    <div className="relative w-screen h-screen">
      <header className="absolute top-0 left-0 z-10 flex items-center justify-between w-full py-5 px-7">
        <img
          className="h-10 cursor-pointer"
          alt="pxl"
          src="https://sun-learning-ff8.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc0b49070-f848-4e56-98fc-7ff9d972a855%2Flogo_pxl_b.png?table=block&id=7c93a0fb-5499-4d9b-97c1-c2f7e0561785&spaceId=06605955-0fd9-4614-ba9a-0812be412dbe&width=470&userId=&cache=v2"
        />
        <button
          type="button"
          className="w-40 mt-5 bg-gray-300 rounded-md h-11 sm:ml-5 sm:mt-0 sm:w-30"
          onClick={onMoveCanvas}
        >
          과제 2로 이동
        </button>
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
