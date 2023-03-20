import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Home from './routes/Home';
import './index.css';
import { Navigate } from 'react-router-dom';
import Imprint from './routes/Imprint';
import Root from './routes/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: 
        <React.Suspense fallback={<></>}>
          <Home />
        </React.Suspense>,
      },
      {
        path: "impressum",
        element: 
        <React.Suspense fallback={<></>}>
          <Imprint />
        </React.Suspense>,
      },
    ]
  },
  {
    path:"*",
    element:<Navigate to="/" replace />
  }
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
