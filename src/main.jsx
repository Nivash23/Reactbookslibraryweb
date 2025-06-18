import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import BrowseBook from './Components/BrowseBook.jsx'
import Bookdetails from './Components/Bookdetails.jsx'
import Error from './Components/Error.jsx'
import { Provider } from 'react-redux'
import { bookstore } from './Components/Reduxstore.js'

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement:<Error/>,
        children: [
            {
                path: "/",
                element:<Home/>,
            },
            {
                path: "/browsebooks",
                element:<BrowseBook/>,
            },
            {
                path: "/bookdetails/:title",
                element:<Bookdetails/>,
            },

        ]
        
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={bookstore}>

        <RouterProvider router={Routes}>
              <App/>
        </RouterProvider>
    </Provider>
  
)
