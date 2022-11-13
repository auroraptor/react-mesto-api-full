import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoute() {
  const auth = {'token': true}

  return (
    auth.token ? <Outlet /> : <Navigate to="/signin"/>
  )
}

export default ProtectedRoute
