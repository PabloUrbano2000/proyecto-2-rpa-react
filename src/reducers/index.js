import { combineReducers } from "redux";
import noticesReducer from "./noticesReducer";
import alertReducer from "./alertReducer";
import authReducer from "./authReducer";

export default combineReducers({
  noticias: noticesReducer,
  alerta: alertReducer,
  autenticacion: authReducer,
});
