import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import Profile from './routes/Profile.jsx'
import Signin from './routes/Signin.jsx'
import Signup from './routes/Signup.jsx'
import About from './routes/About.jsx'
import Home from './routes/Home.jsx'
import { store } from './redux/store.js'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/sign-up",
        element: <Signup />,
      },
      {
        path: "/sign-in",
        element:  <Signin />
      },
      {
        path: "/profile",
        element:  <Profile />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </Provider>,
)
