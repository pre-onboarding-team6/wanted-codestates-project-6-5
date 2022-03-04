import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Detail from '../components/Detail';
import ItemGrid from '../components/ItemGrid';
import Loader from '../components/Loader';
import Paginator from '../components/Paginator';

const Result = ({
  list,
  dataType,
  detailItem,
  ploading,
  rloading,
  searchWord,
}) => {
  const [isDetail, setIsDetail] = useState(false);
  const [pageStep, setPageStep] = useState(1);
  const [filteredList, setFilteredList] = useState([]);

  const { search: queryString } = useLocation();

  console.log(ploading, rloading); // 계속 false 나옴

  // console.log(list);  // 리로드 할 시 searchItems 함수를 다시 돌려야해서 안나옴
  // 어떻게 해야할지... keyword도 저장해두고 있어야 하는지

  useEffect(() => {
    if (dataType === 'regionsData') {
      setIsDetail(true);
    }
  }, [dataType]);

  useEffect(() => {
    const step = Number(queryString.split('&')[1].split('=')[1]);

    setPageStep(step);
  }, [queryString]);

  useEffect(() => {
    setFilteredList(list.slice((pageStep - 1) * 10, pageStep * 10));
  }, [list, pageStep]);

  return (
    <div className="relative flex flex-col">
      <header className="flex py-5 px-7">
        <Link to="/">
          <img
            className="h-10 cursor-pointer"
            alt="pxl"
            src="https://sun-learning-ff8.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc0b49070-f848-4e56-98fc-7ff9d972a855%2Flogo_pxl_b.png?table=block&id=7c93a0fb-5499-4d9b-97c1-c2f7e0561785&spaceId=06605955-0fd9-4614-ba9a-0812be412dbe&width=470&userId=&cache=v2"
          />
        </Link>
      </header>
      <main className="sm:flex">
        {isDetail && <Detail item={detailItem} />}
        <ItemGrid list={filteredList} searchWord={searchWord} />
      </main>
      <Paginator lastPage={Math.ceil(list.length / 10)} />
      {(ploading || rloading) && (
        <div className="absolute flex items-center justify-center w-screen h-screen bg-white">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Result;
