const initialState = {
  loading: false
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true
      };
    case "FINISHED":
      return {
        loading: false
      };
    default:
      return state;
  }
};

export default loadingReducer;
