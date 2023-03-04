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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/impressum",
    element: <Imprint />,
  },
  {
    path:"*",
    element:<Navigate to="/" replace />
  }
]);

const colors = ['192 129 93', '102 153 255', '197 181 154', '128, 203, 239']

document.documentElement.style.setProperty('--color-primary', colors[0]);

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
