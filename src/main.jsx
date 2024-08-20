import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Info from './components/pages/Info.jsx'
import Team from './components/pages/Team.jsx'
import Home from './components/pages/Home.jsx'
import Error from './components/pages/Error.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/team',
                element: <Team/>
            },
            {
                path: '/info',
                element: <Info/>
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);