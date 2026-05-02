import { Navigate, useLocation, Outlet } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, isLoading }) {
    const location = useLocation();
    
    
    const isAuthPage = location.pathname === "/talent/sign-in" || 
                   location.pathname === "/talent/sign-up" || 
                   location.pathname === "/talent/sign-up/step-two" ||
                   location.pathname === "/talent/sign-up/step-three" ||
                   location.pathname === "/talent/sign-up/verification";
    
    
    if (!isAuthenticated && !isAuthPage) {
        return <Navigate to='/talent/sign-in' replace />;
    }
    
    
    if (isAuthenticated && isAuthPage) {
        return <Navigate to='/talent/dashboard' replace />;
    }
    
    
    return <Outlet />;
}

export default CheckAuth;
