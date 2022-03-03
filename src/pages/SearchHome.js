import React, { useState } from 'react';

const SearchHome = () => {
  const [searchWord, setSearchWord] = useState('');

  const handleChange = (e) => setSearchWord(e.target.value);

  const handleSearch = () => {
    // 엔터를 누르거나 검색 버튼을 클릭했을 때의 동작
  };

  return (
    <div className="h-screen flex flex-col">
      <header className="px-7 py-5">
        <img
          className="h-10 cursor-pointer"
          alt="pxl"
          src="https://sun-learning-ff8.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc0b49070-f848-4e56-98fc-7ff9d972a855%2Flogo_pxl_b.png?table=block&id=7c93a0fb-5499-4d9b-97c1-c2f7e0561785&spaceId=06605955-0fd9-4614-ba9a-0812be412dbe&width=470&userId=&cache=v2"
        />
      </header>
      <main className="flex-1 flex flex-col justify-center items-center">
        <div className="mb-16 text-4xl text-gray-600 flex flex-col items-center">
          <div className="font-bold">Artificial Intelligence</div>
          <div>
            PXL <span className="font-bold">Fashion</span> Viewer
          </div>
        </div>
        <div className="w-2/3 flex items-center flex-col justify-center sm:flex-row md:w-1/2 lg:w-1/3">
          <input
            type="text"
            value={searchWord}
            onChange={handleChange}
            onKeyUp={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
            placeholder="IMAGE URL or KEYWORD"
            className="flex-1 py-2 px-5 w-full rounded-full border-2 shadow-lg"
          />
          <button
            type="button"
            className="h-9 mt-5 w-20 sm:ml-5 sm:mt-0 rounded-md bg-gray-300 sm:w-16"
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
