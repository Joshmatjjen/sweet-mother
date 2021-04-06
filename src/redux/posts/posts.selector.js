import { createSelector } from "reselect";

const selectPosts = (state) => state.posts;

// export const selectAllPractices = createSelector(
//   [selectPractices],
//   (practices) => {
//     const { filter } = practices;
//     // console.log(filter);
//     if (practices.practices) {
//       const data = practices.practices.rows.filter((item) => {
//         // console.log(item);
//         if (
//           filter.opt1 === true &&
//           filter.opt2 === false &&
//           filter.opt3 === false
//         ) {
//           return item.patients.length === 0 && item.requests.length === 0;
//         } else if (
//           filter.opt1 === false &&
//           filter.opt2 === true &&
//           filter.opt3 === false
//         ) {
//           return item.patients.length === 0 && item.requests.length === 1;
//         } else if (
//           filter.opt1 === false &&
//           filter.opt2 === false &&
//           filter.opt3 === true
//         ) {
//           return item.patients.length === 1;
//         } else if (
//           filter.opt1 === true &&
//           filter.opt2 === true &&
//           filter.opt3 === false
//         ) {
//           return (
//             (item.patients.length === 0 && item.requests.length === 0) ||
//             (item.patients.length === 0 && item.requests.length === 1)
//           );
//         } else if (
//           filter.opt1 === true &&
//           filter.opt2 === false &&
//           filter.opt3 === true
//         ) {
//           return (
//             (item.patients.length === 0 && item.requests.length === 0) ||
//             item.patients.length === 1
//           );
//         } else if (
//           filter.opt1 === false &&
//           filter.opt2 === true &&
//           filter.opt3 === true
//         ) {
//           return (
//             (item.patients.length === 0 && item.requests.length === 1) ||
//             item.patients.length === 1
//           );
//         } else {
//           return item;
//         }

//         // return practices.practices;
//       });
//       // console.log(data);
//       return data;
//     } else {
//       return practices.practices;
//     }
//   },
// );

export const selectGetAllPosts = createSelector(
  [selectPosts],
  (posts) => posts.allPosts,
);

export const selectIsFetching = createSelector(
  [selectPosts],
  (posts) => posts.isFetching,
);

// joinedPractice;
// export const selectToken = createSelector([selectUser], (user) => user.token);
