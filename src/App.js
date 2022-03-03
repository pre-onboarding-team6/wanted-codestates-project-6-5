import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Result from './pages/Result';
import SearchHome from './pages/SearchHome';

function App() {
  const [list, setList] = useState([]);
  const [dataType, setDataType] = useState([]);
  const [detailItem, setDetailItem] = useState([]);

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
            />
          }
        />
        <Route
          path="/search"
          element={
            <Result list={list} dataType={dataType} detailItem={detailItem} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
