import Axios from "axios";
import { REACT_APP_API, REACT_APP_GET_POSTS } from "@env";
// import { Platform } from "react-native";

export const getPostsApi = async (category, page) => {
  // const headers = {
  //   "Content-Type": "application/json",
  //   Authorization: token,
  // };
  const url =
    REACT_APP_API +
    REACT_APP_GET_POSTS +
    "?order=DESC&per_page=20&page=" +
    page +
    "&filter[meta_key]=category&filter[meta_value]=" +
    category;
  console.log(url);
  // const collectionsMap = await Axios.get(url, { headers });
  const collectionsMap = await Axios.get(url);
  return collectionsMap;
};
