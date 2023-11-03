import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import RootLayout from './components/RootLayout';
import Home from './pages/Home';
import Misija from './pages/Misija';
import Kontakt from './pages/Kontakt';
import Projects from './pages/Projects';
import ErrorPage from './components/ErrorPage';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "misija",
        element: <Misija />,

      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "kontakt",
        element: <Kontakt />,
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")  as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your RootLayout, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
