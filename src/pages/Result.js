import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Detail from '../components/Detail';
import ItemGrid from '../components/ItemGrid';
import Loader from '../components/Loader';
import Paginator from '../components/Paginator';

const Result = ({ list, dataType, detailItem, ploading, rloading }) => {
  const [isDetail, setIsDetail] = useState(false);
  const [pageStep, setPageStep] = useState(1);
  const [filteredList, setFilteredList] = useState([]);

  console.log(ploading, rloading); // 계속 false 나옴

  console.log(list);

  useEffect(() => {
    if (dataType === 'regionsData') {
      setIsDetail(true);
    }
  }, [dataType]);

  return (
    <div className="flex flex-col">
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
        <ItemGrid list={list} />
        <Paginator lastPage={Math.ceil(list.length / 10)} />
      </main>
      {(ploading || rloading) && (
        <div>
          {/* width height 100 viewport로 */}
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Result;
