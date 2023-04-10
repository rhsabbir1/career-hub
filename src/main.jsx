import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter, useParams } from 'react-router-dom'
import Home from './compnent/Home/Home'
import DetailsJob from './compnent/JobFeauter/DetailsJob'
import costomLoader from './Loader/CustonLoader'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'details/:id',
        element: <DetailsJob></DetailsJob>,
        loader: ({params}) => costomLoader(params.id)
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
