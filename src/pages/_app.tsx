import {GlobalStyles} from "@common";
import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

import Router from "./router";

createRoot(document.getElementById("app") as HTMLElement).render(
  <BrowserRouter>
    <GlobalStyles />
    <Router />
  </BrowserRouter>
);
