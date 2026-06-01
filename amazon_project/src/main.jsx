import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import Cart from "./Cart";

ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>

    <Routes>

      <Route path="/" element={<App />} />

      <Route path="/cart" element={<Cart />} />

    </Routes>

  </BrowserRouter>

);