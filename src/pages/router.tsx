import React, {FC, Suspense} from "react";
import {Route, Routes} from "react-router-dom";

import {Home} from "./home";

const Router: FC = () => {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route
          path="/home"
          element={<Home />}
        />
      </Routes>
    </Suspense>
  );
};

export default Router;
