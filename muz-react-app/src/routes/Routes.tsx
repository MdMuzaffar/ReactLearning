import React from "react";
import { createBrowserRouter } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "",
    element: <h1>This is the home route</h1>,
  },
  {
    path: "contacts",
    element: (
      <div>
        <h1>This is the contacts page</h1>
        <ul>
          <li>Muzaffar</li>
          <li>Ahmed</li>
        </ul>
      </div>
    ),
  },
]);

export default appRouter;
