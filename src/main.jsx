import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/app.css";
import FavoritesProvider from "./context/FavoritesContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <FavoritesProvider>
      <App />
  </FavoritesProvider>
  </BrowserRouter>
   
 
);