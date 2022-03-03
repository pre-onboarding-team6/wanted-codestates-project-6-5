const searchItems = ({
  ploading,
  productsData,
  rloading,
  regionsData,
  searchWord,
  setList,
  setDataType,
  setDetailItem,
  keywordSet,
}) => {
  let word = searchWord.trim();
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
        setDetailItem(filterd);

        const category = filterd[0]['category_names'];
        const keywordFilterd = productsData.filter((item) =>
          item.category_names[0].includes(category[0]),
        );
        console.log([...keywordFilterd]);
        setList([...keywordFilterd]);

        setDataType('regionsData');
      }
      //2. 이미지 주소 - regionsData
    } else if (isUrl) {
      if (rloading) {
        return;
      } else {
        const filterd = regionsData.filter((item) =>
          item.image_url.match(word),
        );
        setDetailItem(filterd);

        const category = filterd[0]['category_names'];
        const keywordFilterd = productsData.filter((item) =>
          item.category_names[0].includes(category[0]),
        );
        setList([...keywordFilterd]);
        console.log([...keywordFilterd]);

        setDataType('regionsData');
      }
      //3. 키워드
    } else {
      if (ploading) {
        return;
      } else {
        const filterd = productsData.filter((item) =>
          item.name.match(searchWord),
        );
        setList(filterd);

        Object.keys(keywordSet).forEach(function (k) {
          if (k === word) {
            for (let i = 0; i < keywordSet[k].length; i++) {
              const keywordFilterd = productsData.filter(
                (item) =>
                  item.category_names[0].includes(keywordSet[k][i]) ||
                  item.category_names[1].includes(keywordSet[k][i]) ||
                  item.category_names[2].includes(keywordSet[k][i]),
              );
              setList([...keywordFilterd]);
              console.log([...keywordFilterd]);
            }
          }
        });

        setDataType('productsData');
      }
    }
  };

  return {
    distinguishKeyword,
  };
};
export default searchItems;
