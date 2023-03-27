import { Outlet } from "react-router-dom";
import Header from "../components/Header";

//Outlet nos ayudará a realizar un renderizado dinamico dependiendo de la ruta donde estemos, mientras header permanece estático.

function Layout () {
    return (
    <div >
            <Header />
            <Outlet />
    </div>)
    
    
}


export default Layout