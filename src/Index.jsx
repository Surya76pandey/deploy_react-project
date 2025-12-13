import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import Test from "./components/Test";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: 'home',
            element: <Home/>
        },
        {
             path: 'test',
            element: <Test/>

        }
    
        
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router} />
  
);
