import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import Result from './pages/Result';
import SearchHome from './pages/SearchHome';

function App() {
  const [list, setList] = useState([]);
  const [dataType, setDataType] = useState([]);
  const [detailItem, setDetailItem] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  const { loading: ploading, data: productsData } = useFetch({
    requestUrl: 'https://static.pxl.ai/problem/data/products.json',
  });
  const { loading: rloading, data: regionsData } = useFetch({
    requestUrl: 'https://static.pxl.ai/problem/data/regions.json',
  });

  console.log(productsData);
  console.log(list);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <SearchHome
              setList={setList}
              dataType={dataType}
              setDataType={setDataType}
              setDetailItem={setDetailItem}
              ploading={ploading}
              productsData={productsData}
              rloading={rloading}
              regionsData={regionsData}
              searchWord={searchWord}
              setSearchWord={setSearchWord}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Result
              list={list}
              setList={setList}
              productsData={productsData}
              regionsData={regionsData}
              dataType={dataType}
              detailItem={detailItem}
              ploading={ploading}
              rloading={rloading}
              setDataType={setDataType}
              setDetailItem={setDetailItem}
              searchWord={searchWord}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
