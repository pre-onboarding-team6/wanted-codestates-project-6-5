const serchItems = ({
  ploading,
  productsData,
  rloading,
  regionsData,
  keyword,
  setList,
  keywordSet,
}) => {
  let word = keyword.trim();
  const checkNum = /^-?\d+$/;
  const checkUrl = /^http[s]?\:\/\//i;
  const isNum = checkNum.test(word) ? true : false;
  const isUrl = checkUrl.test(word) ? true : false;

  const distinguishKeyword = () => {
    //1. 숫자 - regionsData
    if (isNum) {
      if (rloading) {
        return;
      } else {
        const filterd = regionsData.filter(
          (item) => item.product_code.toString() === word,
        );
        setList(filterd);

        const category = filterd[0]['category_names'];
        const keywordFilterd = regionsData.filter(
          (item) => item.category_names[0].includes(category[0]),
          // item.category_names[1].includes(category[1]) ||
          // item.category_names[2].includes(category[2]),
        );
        setList([...keywordFilterd]);
        return 'regionsData';
      }
      //2. 이미지 주소 - regionsData
    } else if (isUrl) {
      if (rloading) {
        return;
      } else {
        const filterd = regionsData.filter((item) =>
          item.image_url.match(word),
        );
        setList(filterd);

        const category = filterd[0]['category_names'];
        const keywordFilterd = regionsData.filter(
          (item) => item.category_names[0].includes(category[0]),
          // item.category_names[1].includes(category[1]) ||
          // item.category_names[2].includes(category[2]),
        );
        setList([...keywordFilterd]);
        return 'regionsData';
      }
      //3. 키워드
    } else {
      if (ploading) {
        return;
      } else {
        const filterd = productsData.filter((item) => item.name.match(keyword));
        setList(filterd);

        Object.keys(keywordSet).forEach(function (k) {
          if (k === word) {
            for (let i = 0; i < keywordSet[k].length; i++) {
              // const keywordFilterd = productsData.filter(filterByCategory);

              const keywordFilterd = productsData.filter(
                (item) =>
                  item.category_names[0].includes(keywordSet[k][i]) ||
                  item.category_names[1].includes(keywordSet[k][i]) ||
                  item.category_names[2].includes(keywordSet[k][i]),
              );
              setList([...keywordFilterd]);
            }
          }
        });

        return 'productsData';
      }
    }
  };

  return {
    distinguishKeyword,
  };
};
export default serchItems;
