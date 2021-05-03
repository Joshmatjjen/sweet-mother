import PostsActionTypes from "./posts.types";

const INITIAL_STATE = {
  allBabyPosts: null,
  allSiblingPosts: null,
  allMotherPosts: null,
  allSpousePosts: null,
  allSexPosts: null,
  allHealthPosts: null,
  isLoading: null,
  isFetching: null,
  error: null,
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostsActionTypes.CLEAR_POSTS_DATA:
      return {
        ...state,
        groups: null,
        isLoading: null,
        isFetching: null,
        allBabyPosts: null,
        allSiblingPosts: null,
        allMotherPosts: null,
        allSpousePosts: null,
        allSexPosts: null,
        allHealthPosts: null,
      };

    case PostsActionTypes.GET_ALL_POSTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case PostsActionTypes.GET_BABY_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoading: false,
        allBabyPosts: action.payload,
      };

    case PostsActionTypes.GET_SIBLING_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoading: false,
        allSiblingPosts: action.payload,
      };

    case PostsActionTypes.GET_MOTHER_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoading: false,
        allMotherPosts: action.payload,
      };

    case PostsActionTypes.GET_SPOUSE_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoading: false,
        allSpousePosts: action.payload,
      };

    case PostsActionTypes.GET_SEX_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoading: false,
        allSexPosts: action.payload,
      };

    case PostsActionTypes.GET_HEALTH_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoading: false,
        allHealthPosts: action.payload,
      };

    case PostsActionTypes.GET_ALL_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isLoading: false,
        error: action.payload,
      };
    case PostsActionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
        isFetching: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
