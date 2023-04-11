import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Layout from './components/Layout/Layout';
import ErrorPage from './error-page';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('jobs.json'),
      },
      {
        path: 'details/:id',
        element: <Details></Details>,
        loader: () => fetch('/jobs.json'),
      },
      {
        path: 'apply',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/jobs.json'),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
