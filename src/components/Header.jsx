//Se importa el dispatch y el estado global del logout lo cual nos permitirá cerrar la sesión del usuario logueado

import { useDispatch } from "react-redux"
import { logout } from "../store/slices/auth.slice"

function Header () {

    const dispatch = useDispatch()

    return (
        <div className="flex flex-row justify-between bg-red-100 rounded-b-lg p-5">
            <h2 className="font-bold text-3xl text-red-600">Music Radio Inc 🎶</h2>
            <button className="rounded bg-red-300 px-5 font-bold hover:scale-105 hover:bg-zinc-500 hover:text-slate-50 duration-300" onClick={ () => dispatch(logout()) }>
                Sign out
            </button>
        </div>
    )
}

export default Header