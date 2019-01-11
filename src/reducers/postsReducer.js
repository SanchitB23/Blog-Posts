const initialState = {
  postsData: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_POSTS":
      return { ...state, postsData: payload.data };

    default:
      return state;
  }
};
