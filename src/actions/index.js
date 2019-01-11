import jsonPlaceHolder from "../apis/jsonPlaceHolder";
import _ from "lodash";
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  /*
   * const userIds = _.uniq(_.map(getState().posts.postsData, "userId"));
   * userIds.forEach(id => dispatch(fetchUser(id)));
   * Below Lines of Code mean these 2 lines chained into 1 statement ^^^^
   */

  _.chain(getState().posts.postsData)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
