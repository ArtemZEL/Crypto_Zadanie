import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './page/Home';
import Crypto from './page/Crypto';
import Trending from './page/Trending';
import Saved from './page/Saved';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    children:[
      {
        path:"/",
        element:<Crypto/>
      },
      {
        path:"/trending",
        element:<Trending/>
      },
      {
        path:"/saved",
        element:<Saved/>
      },

    ]
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
