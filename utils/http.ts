export const getAllSurah = () => {
  return new Promise((resolve, reject) => {
    fetch('https://api.quran.com/api/v4/chapters?language=en')
      .then((res) => {
        res
          .json()
          .then((data) => {
            resolve(data?.chapters);
          })
          .catch(reject);
      })
      .catch(reject);
  });
};
