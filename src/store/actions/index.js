import axios from "axios";
export const SET_DATA = "SET_DATA";
export const SET_MANGA = "SET_MANGA";
const URL = "https://api.mangadex.org";
  // process.env.NODE_ENV === "development"
  //   ? "https://api.mangadex.org"
  //   : "/cors-proxy/https://api.mangadex.org";

export const setData = (mangaData) => {
  return {
    type: SET_DATA,
    mangaData,
  };
};

export const getQuery = (query) => {
  return async (dispatch) => {
    const res = await axios.get(URL + "/manga", {
      params: {
        limit: 20,
        title: query || null
      },
      withCredentials: true,
    });
    let mangaids = []
    let mangaData = res.data.results?.map((item) => ({
      id: item.data.id,
      title: item.data.attributes.title.en,
      description: item.data.attributes.description.en,
    }));
    mangaData.map((item) => 
    {
      mangaids.push(item.id)
      return true;
    })
    dispatch(setData(mangaData));
  };
};

export const setManga = (mangaDetails) => {
  return {
    type: SET_MANGA,
    mangaDetails,
  };
};

export const getManga = (id) => {
  return async (dispatch) => {
    const res = await axios.get(URL + "/manga/" + id);
    let i = 0;
    let chapters = {};
    let total = 0;
    do {
      const chapList = await axios.get(URL +"/manga/" + id + "/feed", {
        params: {
          'order[chapter]': "desc",
          limit: 500,
          offset: 500 * i,
          translatedLanguage :["en"]
        },
      });
      total = chapList.data.total;
      chapList.data.results?.map((item) => {
        let item_el = {
          id: item.data.id,
          title: item.data.attributes.title,
          volume: item.data.attributes.volume,
          chapter: item.data.attributes.chapter,
          pages: item.data.attributes.dataSaver,
          hash: item.data.attributes.hash
        };
        chapters[item_el.id]=item_el;
        return true;
      });
      i += 1;
    } while (total > 100 * i + 100);
    let mangaDetails = {
      id: res.data.data.id,
      title: res.data.data.attributes.title.en,
      description: res.data.data.attributes.description.en,
      links: res.data.data.attributes.links,
      lastVolume: res.data.data.attributes.lastVolume,
      lastChapter: res.data.data.attributes.lastChapter,
      chapList: chapters,
    };
    dispatch(setManga(mangaDetails));
  };
};
