import { combineReducers } from "redux";
import authReducer from "./authReducer";
import tokenReducer from "./tokenReducer";
import { getEquipmentsReducer } from "./equipReducers";
import loadingReducer from "./loadingReducer";
import alertsReducer from "./alertsReducer";

const rootReducer = combineReducers({
  authReducer,
  tokenReducer,
  getEquipmentsReducer,
  loadingReducer,
  alertsReducer
});

export default rootReducer;
