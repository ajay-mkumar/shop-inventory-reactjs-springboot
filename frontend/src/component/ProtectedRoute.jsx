import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoute() {
    const isAuthenticated = useSelector(state => state.users.token);
    const location = useLocation(); // Helps redirect back after login

    return isAuthenticated ? (
        <Outlet />
    ) : (
        <Navigate to="/auth/login" replace state={{ from: location }} />
    );
}

export default ProtectedRoute;
