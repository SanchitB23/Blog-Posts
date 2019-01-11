const initialState = {
  posts: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_POSTS":
      //   return { ...state, ...payload };
      return { posts: payload };

    default:
      return state;
  }
};
