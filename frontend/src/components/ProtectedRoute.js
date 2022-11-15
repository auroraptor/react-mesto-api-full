import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute({onLogin}) {
  console.log('[AUTHENTICATION PROTECTION]: ', onLogin);
  return (
    onLogin ? <Outlet /> : <Navigate to="/signin"/>
  )
}

export default ProtectedRoute
