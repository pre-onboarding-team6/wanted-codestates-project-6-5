import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Detail from '../components/Detail';
import ItemGrid from '../components/ItemGrid';
import Loader from '../components/Loader';
import Paginator from '../components/Paginator';
import useFetch from '../hooks/useFetch';
import { parseQueryString } from '../utils/queryUtils';
import searchItems from '../utils/searchItems';

const Result = () => {
  const { loading: ploading, data: productsData } = useFetch({
    requestUrl: 'https://static.pxl.ai/problem/data/products.json',
  });
  const { loading: rloading, data: regionsData } = useFetch({
    requestUrl: 'https://static.pxl.ai/problem/data/regions.json',
  });

  const location = useLocation();
  const [searchWord, setSearchWord] = useState('');
  const [pageStep, setPageStep] = useState(1);
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isDetail, setIsDetail] = useState(false);
  const [dataType, setDataType] = useState('');
  const [detailItem, setDetailItem] = useState([]);

  const { distinguishKeyword } = searchItems({
    ploading,
    productsData,
    rloading,
    regionsData,
    searchWord,
    setList,
    setDataType,
    setDetailItem,
  });

  // 쿼리 분석
  useEffect(() => {
    const queries = parseQueryString(location.search);
    setSearchWord(decodeURI(queries.keyword));
    setPageStep(queries.page);
  }, [location.search]);

  useEffect(() => {
    if (!ploading && !rloading) {
      distinguishKeyword();
    }
  }, [pageStep, searchWord, ploading, rloading]);

  useEffect(() => {
    if (dataType === 'regionsData') {
      setIsDetail(true);
    }
  }, [dataType]);

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
      <main className="justify-center w-full sm:flex">
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
