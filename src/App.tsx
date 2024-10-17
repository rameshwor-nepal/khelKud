import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from './component/ui/MainLayout'
import ErrorPage from './component/ErrorPage'
import HomePage from './pages/home/HomePage'
import LogIn from './pages/auth/LogIn'
import NotFoundPage from './component/NotFoundPage'

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout />
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  },
  {
    path: "/login",
    element: <LogIn />,
    errorElement: <ErrorPage />
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
])

function App() {

  return <RouterProvider router={routes} />
}

export default App
