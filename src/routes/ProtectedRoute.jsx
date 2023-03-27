import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

//Este nos servira para que el usuario pueda tener acceso a los hijos que estaran dentro del layout solo si el usuario tiene sesion iniciada

function ProtectedRoute({ children }) {
  const { access } = useSelector((state) => state.auth);

  return access ? children : <Navigate to="/login" />;
}


export default ProtectedRoute;
