import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter, useParams } from 'react-router-dom'
import Home from './compnent/Home/Home'
import DetailsJob from './compnent/JobFeauter/DetailsJob'
import costomLoader from './Loader/CustonLoader'
import ApplyedJOb from './compnent/ApplyedJob/ApplyedJOb'
import Chart from './compnent/Chart/Chart'
import ErroePage from './compnent/ErroePage/ErroePage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement:<ErroePage></ErroePage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/details/:id',
        element: <DetailsJob></DetailsJob>,
        loader: ({params}) => costomLoader(params.id)
      },
      {
        path:'/applyedJOb',
        element:<ApplyedJOb></ApplyedJOb>
      },
      {
        path:'/chart',
        element:<Chart></Chart>
      },
      {

      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
