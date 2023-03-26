import { createBrowserRouter as Router } from 'react-router-dom'
import App from '../App'
import Layout from '../layout'
import Login from '../views/Login'
import Register from '../views/Register'
import ProtectedRoute from './ProtectedRoute'

const router = Router([
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <Layout />
            </ProtectedRoute>
        ),
        children: [
            {
                path: '/',
                element: <App />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
])

export default router