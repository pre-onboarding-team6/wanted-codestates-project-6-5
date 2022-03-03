import React, { useState } from 'react';
import useFetch from './hooks/useFetch';
import serchItems from './utils/serchItems';
import keywordSet from './lang/keyword.json';

function App() {
  const { loading: ploading, data: productsData } = useFetch({
    requestUrl: 'https://static.pxl.ai/problem/data/products.json',
  });
  const { loading: rloading, data: regionsData } = useFetch({
    requestUrl: 'https://static.pxl.ai/problem/data/regions.json',
  });

  const [list, setList] = useState([]);
  const [keyword, setKeyword] = useState('');

  const { distinguishKeyword } = serchItems({
    ploading,
    productsData,
    rloading,
    regionsData,
    keyword,
    setList,
    keywordSet,
  });
  console.log(list);
  return (
    <div>
      <input
        type="text"
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      ></input>
      <button onClick={distinguishKeyword}>검색</button>
    </div>
  );
}

export default App;
