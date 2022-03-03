import React, { useState } from 'react';
import Detail from '../components/Detail';
import ItemGrid from '../components/ItemGrid';

const Result = () => {
  const [isDetail, setIsDetail] = useState(true);

  return (
    <div className="flex flex-col">
      <header className="px-5 py-3">
        <img
          className="h-8 cursor-pointer"
          alt="pxl"
          src="https://sun-learning-ff8.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc0b49070-f848-4e56-98fc-7ff9d972a855%2Flogo_pxl_b.png?table=block&id=7c93a0fb-5499-4d9b-97c1-c2f7e0561785&spaceId=06605955-0fd9-4614-ba9a-0812be412dbe&width=470&userId=&cache=v2"
        />
      </header>
      <main className="sm:flex">
        {isDetail && <Detail />}
        <ItemGrid />
      </main>
    </div>
  );
};

export default Result;
