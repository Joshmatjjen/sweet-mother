import { createSelector } from "reselect";

const selectPosts = (state) => state.posts;

export const selectGetBabyPosts = createSelector(
  [selectPosts],
  (posts) => posts.allBabyPosts,
);

export const selectGetSiblingPosts = createSelector(
  [selectPosts],
  (posts) => posts.allSiblingPosts,
);

export const selectGetMotherPosts = createSelector(
  [selectPosts],
  (posts) => posts.allMotherPosts,
);

export const selectGetSpousePosts = createSelector(
  [selectPosts],
  (posts) => posts.allSpousePosts,
);

export const selectGetSexPosts = createSelector(
  [selectPosts],
  (posts) => posts.allSexPosts,
);

export const selectGetHealthPosts = createSelector(
  [selectPosts],
  (posts) => posts.allHealthPosts,
);

export const selectIsFetching = createSelector(
  [selectPosts],
  (posts) => posts.isFetching,
);

// joinedPractice;
// export const selectToken = createSelector([selectUser], (user) => user.token);
