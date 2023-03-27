import React from "react";
import ReactDOM from "react-dom/client";

//Se maneja librerias react-redux y redux-toolkit para manejar el estado global de la aplicación
import { Provider } from "react-redux";

//Se maneja la libreria react-router-dom para el sistema de enrutado de la aplicación
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import store from "./store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  //Pasamos la config. del store como del sistema de rutas a todos los componentes de la aplicación
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
