import './app.scss';
import React from 'react';
import {RouterProvider} from "react-router-dom";
import routes from "./lib/routes.js";

const App = () => {
  return (
      <>
          <RouterProvider router={routes} />
      </>
  )
}

export default App;
