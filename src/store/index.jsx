import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth.slice";

//config del estado global de nuestrta app utilizando configurStore de la libreria redux-toolkit
//se importa el reducer que maneja el sistema de autenticación de la app

const store = configureStore({
  reducer: {
    auth
  },
});

export default store
