import { useDispatch } from "react-redux"
import { logout } from "../store/action/authAction"
import './header.css'

function Header () {

    const dispatch = useDispatch()

    return (
        <div className="flex flex-row justify-between p-2 bg-red-100 rounded-b-lg">
            <h2 className="font-bold text-2xl">Music Radio Inc</h2>
            <button className="rounded bg-red-300 px-5 font-bold" onClick={ () => dispatch(logout()) }>
                Sign out
            </button>
        </div>
    )
}

export default Header