import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

    const { access } = useSelector( (state) => state.auth )

    return access ? children : <Navigate to="/login"/>
}

export default ProtectedRoute