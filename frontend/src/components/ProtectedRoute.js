import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute() {
  const auth = {'token': localStorage.getItem('jwt')}

  return (
    auth.token ? <Outlet /> : <Navigate to="/signin"/>
  )
}

export default ProtectedRoute
