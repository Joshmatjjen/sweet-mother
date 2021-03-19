import Axios from 'axios';
// import {
//   REACT_APP_API,
//   REACT_APP_PRACTICES,
//   REACT_APP_JOIN_PRACTICES,
//   REACT_APP_EDIT_PROFILE,
//   REACT_APP_GET_PRACTICES_DMS,
//   REACT_APP_GET_SUBGROUPS,
// } from '@env';
import { Platform } from 'react-native';

// export const getPracticesApi = async (token) => {
//   const headers = {
//     'Content-Type': 'application/json',
//     Authorization: token,
//   };
//   const url = REACT_APP_API + REACT_APP_PRACTICES;
//   const collectionsMap = await Axios.get(url, { headers });
//   return collectionsMap;
// };

// export const getJoinedPracticeApi = async (token) => {
//   // console.log(token);
//   const headers = {
//     'Content-Type': 'application/json',
//     Authorization: token,
//   };
//   const url = REACT_APP_API + REACT_APP_JOIN_PRACTICES;
//   const collectionsMap = await Axios.get(url, { headers });
//   return collectionsMap;
// };

// export const joinPracticeApi = async (practiceId, token) => {
//   // console.log(token);
//   const headers = {
//     'Content-Type': 'application/json',
//     Authorization: token,
//   };
//   const url =
//     REACT_APP_API + REACT_APP_JOIN_PRACTICES + '/' + practiceId + '/request';
//   const collectionsMap = await Axios.post(url, {}, { headers });
//   return collectionsMap;
// };

// export const getPracticesDmsApi = async (token) => {
//   const headers = {
//     'Content-Type': 'application/json',
//     Authorization: token,
//   };
//   const url = REACT_APP_API + REACT_APP_GET_PRACTICES_DMS;
//   const collectionsMap = await Axios.get(url, { headers });
//   return collectionsMap;
// };

// export const getPracticeSubGroupApi = async (token, practiceId) => {
//   const headers = {
//     'Content-Type': 'application/json',
//     Authorization: token,
//   };
//   const url =
//     REACT_APP_API +
//     REACT_APP_PRACTICES +
//     `/${practiceId}` +
//     REACT_APP_GET_SUBGROUPS;
//   const collectionsMap = await Axios.get(url, { headers });
//   return collectionsMap;
// };

// export const chatWithPracticeApi = async (practiceId, token) => {
//   // console.log(token);
//   const headers = {
//     'Content-Type': 'application/json',
//     Authorization: token,
//   };
//   const url =
//     REACT_APP_API + REACT_APP_JOIN_PRACTICES + '/' + practiceId + '/dms';
//   const collectionsMap = await Axios.post(url, {}, { headers });
//   return collectionsMap;
// };
// Twitter Route
// export const twitterVideoApi = async (url, token) => {
//   const apiUrl =
//     REACT_APP_WAVE_DL_API + REACT_APP_TWITTER_VIDEO + `?url=${url}`;
//   const data = await Axios.get(apiUrl);
//   return data;
// };
