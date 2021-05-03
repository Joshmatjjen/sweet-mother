import PostsActionTypes from "./posts.types";

export const getAllPostsStart = (data) => ({
  type: PostsActionTypes.GET_ALL_POSTS_START,
  payload: data,
});

export const getBabyPostsSuccess = (list) => ({
  type: PostsActionTypes.GET_BABY_POSTS_SUCCESS,
  payload: list,
});

export const getSiblingPostsSuccess = (list) => ({
  type: PostsActionTypes.GET_SIBLING_POSTS_SUCCESS,
  payload: list,
});

export const getMotherPostsSuccess = (list) => ({
  type: PostsActionTypes.GET_MOTHER_POSTS_SUCCESS,
  payload: list,
});

export const getSpousePostsSuccess = (list) => ({
  type: PostsActionTypes.GET_SPOUSE_POSTS_SUCCESS,
  payload: list,
});

export const getSexPostsSuccess = (list) => ({
  type: PostsActionTypes.GET_SEX_POSTS_SUCCESS,
  payload: list,
});

export const getHealthPostsSuccess = (list) => ({
  type: PostsActionTypes.GET_HEALTH_POSTS_SUCCESS,
  payload: list,
});

export const getAllPostsFailure = (data) => ({
  type: PostsActionTypes.GET_ALL_POSTS_FAILURE,
  payload: data,
});

export const chatWithPostsuccess = (data) => ({
  type: PostsActionTypes.CHAT_WITH_PRACTICE_SUCCESS,
  payload: data,
});

export const setLoading = (action) => ({
  type: PostsActionTypes.SET_LOADING,
  payload: action,
});

export const clearPostsData = () => ({
  type: PostsActionTypes.CLEAR_POSTS_DATA,
});
