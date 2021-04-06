import PostsActionTypes from "./posts.types";

export const getAllPostsStart = () => ({
  type: PostsActionTypes.GET_ALL_POSTS_START,
});

export const getAllPostsSuccess = (list) => ({
  type: PostsActionTypes.GET_ALL_POSTS_SUCCESS,
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
