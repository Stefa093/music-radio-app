import { createSlice } from "@reduxjs/toolkit";
import api from '../../services/api'

//Se crea el reducer para controlar el estado de la app utilizando unas acciones que son metodos que manejan el estado de autorizacion de la app

//Se utiliza localstorage para darle presistencia a la sesion del usuario
const ls = window.localStorage
const initialState = JSON.parse(ls.getItem("auth")) || { access: false };
const { createUser, authentication } = api()

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register(state, { payload }) {
      try {
        createUser(payload);
      } catch (error) {
        throw new Error("User already exists");
      }
    },
    login(state, { payload }) {
      try {
        authentication(payload);
        state.access = true;
        ls.setItem("auth", JSON.stringify(state))
      } catch (error) {
        throw new Error("Email or Password are incorrect");
      }
    },
    logout(state) {
      state.access = false;
      ls.removeItem("auth")
    },
  },
});



export const { register, login, logout } = authSlice.actions;
export default authSlice.reducer;
