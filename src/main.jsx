import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page"
import Contact from "./routes/contact";
const router = createBrowserRouter([{
  path:"/",
  element: <Root/>,
  errorElement: <ErrorPage/>,
  children:[{
    path:"/contacts/:contactId",
    element:<Contact/>
  }]
}
])
ReactDOM.createRoot(document.querySelector("#root")).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
