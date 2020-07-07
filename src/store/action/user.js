import LoginService from "../../service/login";
import { REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_SAGA } from "./loginType";

export const login = userInfo => ({ type: LOGIN_SAGA, payload: userInfo });
