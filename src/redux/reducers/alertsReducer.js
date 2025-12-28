const initialState = {
  alerts: []
};

const alertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_ALERT":
      return [
        ...state,
        state.alerts.push({
          message: action.payload.message,
          status: action.payload.status
        })
      ];
    case "REMOVE_ALERT":
      return [...state, state.alerts.pop()];
    default:
      return state;
  }
};

export default alertsReducer;
