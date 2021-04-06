import { takeLatest, put, all, call, delay, select } from "redux-saga/effects";
import { getPostsApi } from "../../apis/api";
import PostsActionTypes from "./posts.types";
import {
  getAllPostsFailure,
  getAllPostsSuccess,
  setLoading,
  // setPracticeId,
} from "./posts.actions";
// import { showMessage } from "react-native-flash-message";

// const userActive = state => state.user.currentUser;
// const userToken = (state) => state.user.token.key;
// const havePracticeId = (state) => state.practice.currentPracticeId;

export function* willGetAllPosts() {
  // const token = yield select(userToken);
  // const currentPracticeId = yield select(havePracticeId);
  // console.log('Do have Id', currentPracticeId);
  // console.log('going in aoi');
  try {
    const result = yield getPostsApi().then(function (response) {
      return response.data;
    });
    console.log(result);
    yield put(getAllPostsSuccess(result));
  } catch (error) {
    console.log(error);
    console.log(error.response);
    // showMessage({
    //   message: error.response ? error.response.data.errors : error.message,
    //   type: 'danger',
    // });
    // yield delay(2000);
    yield put(
      getAllPostsFailure(
        error.response
          ? error.response.data.errors || error.response.data.errors
          : eMsg || "Please check your connectivity, And try again",
      ),
    );
  }
}

function getUniqueListBy(arr, key) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

export function* onGetAllPosts() {
  yield takeLatest(PostsActionTypes.GET_ALL_POSTS_START, willGetAllPosts);
}

export function* postsSagas() {
  yield all([call(onGetAllPosts)]);
}