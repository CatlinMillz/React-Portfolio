import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import Home from './pages/Home'
import About from './pages/About'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Development from './pages/Development';
import Contact from './pages/Contact';
import Photography from './pages/Photography';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'development',
        element: <Development />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'photography',
        element: <Photography />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)
