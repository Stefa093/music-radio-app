import api from "../../services/api";

const REGISTER = "REGISTER";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const { createUser, authentication } = api();

function register(data) {
  return function (dispatch) {
    try {
      createUser(data);
    } catch (error) {
      throw new Error("User already exists");
    }
  };
}

function login(data) {
  return function (dispatch) {
    try {
      authentication(data);
      dispatch({ type: LOGIN });
    } catch (error) {
      throw new Error("Email or Password are incorrect");
    }
  };
}

function logout() {
  return function (dispatch) {
    dispatch({ type: LOGOUT });
  };
}

export { REGISTER, LOGIN, LOGOUT, register, login, logout };
