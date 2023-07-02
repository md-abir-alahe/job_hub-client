import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Layout/Home';
import ErrorPage from './components/ErrorPage/ErrorPage';
import LandingPageContainer from './components/LandingPageContainer/LandingPageContainer';
import FeaturedJobDetails from './components/FeaturedJobDetails/FeaturedJobDetails';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Statistics from './components/Statistics/Statistics';
import { jobLoader } from './components/Loaders/jobLoader';
import Blog from './components/Blog/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <LandingPageContainer></LandingPageContainer>,
        loader: ()=> fetch('featuredJobs.json')
      },
      {
        path: "/job/:jobId",
        element: <FeaturedJobDetails></FeaturedJobDetails>,
        loader:   ({params})=> fetch(`featuredJobs/${params.jobId}.json`)
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: jobLoader
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
