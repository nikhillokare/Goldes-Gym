export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "20d13e354amshab88c97218b1f48p1aaae4jsnb60a4c64bd10",
  },
};
export const fatchData = async (url, options) => {
  const responce = await fetch(url, options);
  const data = await responce.json();
  return data;
};
