import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './components/pages/About.jsx'
import Contact from './components/pages/Contact.jsx'
import Portfolio from './components/pages/Team.jsx'
import Resume from './components/pages/Home.jsx'
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
                element: <clientInformation/>
            },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);