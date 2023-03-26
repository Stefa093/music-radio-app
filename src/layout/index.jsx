import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout () {
    return (
    <div className="bg-gradient-to-brfrom-violet-500 to-fuchsia-500">
            <Header />
            <Outlet />
    </div>)
    
    
}

export default Layout