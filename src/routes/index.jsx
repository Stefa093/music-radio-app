import { createBrowserRouter as Router } from 'react-router-dom'
import App from '../App'
import Layout from '../layout'
import Login from '../views/Login'
import Register from '../views/Register'
import ProtectedRoute from './ProtectedRoute'

//Estamos creando el sist de enrutado de nuestra aplicacion donde app será una ruta protegida y solamente se podrá acceder a ella si el usuario ha iniciado sesion,
//las rutas login y register son rutas publicas donde el usuario puede acceder para poder registrarse e iniciar sesion
//De igual forma estamos utilizando el layout este es un componente superior que contiene componentes hijos para reutilizarlos

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