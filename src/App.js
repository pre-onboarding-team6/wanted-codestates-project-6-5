import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import Canvas from './pages/Canvas';
import Result from './pages/Result';
import SearchHome from './pages/SearchHome';

function App() {
  const [list, setList] = useState([]);
  const [dataType, setDataType] = useState([]);
  const [detailItem, setDetailItem] = useState([]);
  const { loading: ploading, data: productsData } = useFetch({
    requestUrl: 'https://static.pxl.ai/problem/data/products.json',
  });
  const { loading: rloading, data: regionsData } = useFetch({
    requestUrl: 'https://static.pxl.ai/problem/data/regions.json',
  });

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <SearchHome
              list={list}
              setList={setList}
              dataType={dataType}
              setDataType={setDataType}
              setDetailItem={setDetailItem}
              ploading={ploading}
              productsData={productsData}
              rloading={rloading}
              regionsData={regionsData}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Result
              list={list}
              dataType={dataType}
              detailItem={detailItem}
              ploading={ploading}
              rloading={rloading}
            />
          }
        />
        <Route path="/canvas" element={<Canvas />} />
      </Routes>
    </div>
  );
}

export default App;
