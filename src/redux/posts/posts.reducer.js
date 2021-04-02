import PostsActionTypes from "./posts.types";

const INITIAL_STATE = {
  join: [],
  isLoading: null,
  error: null,
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostsActionTypes.CLEAR_POST_DATA:
      return {
        ...state,
        groups: null,
        isLoading: null,
        isFetching: null,
        allMessages: [],
      };

    case PostsActionTypes.GET_ALL_POSTS_START:
      return {
        ...state,
        isFetching: true,
      };
    case PostsActionTypes.GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isLoading: false,
        posts: action.payload,
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
