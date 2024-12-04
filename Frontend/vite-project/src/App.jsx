
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/home.jsx'
import Login from './components/auth/login.jsx'
import Signup from './components/auth/signup.jsx'
import Jobs from './components/jobs'
import Browser from './components/browser'
import Profile from './components/profile'
import JobDescription from './components/jobDescription'

const appRouter = new createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/jobs',
    element: <Jobs />
  },
  {
    path: '/browser',
    element: <Browser />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path:"/description/:id",
    element: <JobDescription />
  }
])
function App() {
  
  return (
   <>
    <RouterProvider router = {appRouter} />   
   </>
  )
}

export default App
