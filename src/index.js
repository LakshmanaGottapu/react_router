import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Contact from "./components/BooksLayout";
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider, BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const MyRouter = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children:[
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>
  }
])
root.render(
  <React.StrictMode>
  <Router>
    <Home/>
  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
