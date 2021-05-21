import axios from "axios";
export const SET_DATA = "SET_DATA";

export const setData = (mangaData) => {
  return {
    type: SET_DATA,
    mangaData,
  };
};

export const getQuery = (query) => {
  return async (dispatch) => {
    const res = await axios.get("/cors-proxy/https://api.mangadex.org/manga", {
      params: {
        limit: 20,
        title: query || null,
      },
    });
    let mangaData = res.data.results.map((item) => ({
      id: item.data.id,
      title: item.data.attributes.title.en,
      description: item.data.attributes.description.en,
    }));
    dispatch(setData(mangaData));
  };
};
