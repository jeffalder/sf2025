import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Convention from './subpages/about-convention';
import SanFrancisco from './subpages/about-sf';
import Callers from './subpages/the-callers';
import Hotel from './subpages/the-hotel';
import Venue from './subpages/the-venue';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Convention /> },
      { path: "/sanfrancisco", element: <SanFrancisco /> },
      { path: "/convention", element: <Convention /> },
      { path: "/callers", element: <Callers /> },
      { path: "/hotel", element: <Hotel /> },
      { path: "/venue", element: <Venue /> }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
