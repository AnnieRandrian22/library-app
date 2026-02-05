import React from 'react'
import { Navigate } from 'react-router-dom'

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole: 'admin' | 'reader'
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const token = localStorage.getItem('token')
  const userRole = localStorage.getItem('userRole')

  if (!token) {
    return <Navigate to="/login" replace />
  }

  if (userRole !== requiredRole) {
    return <Navigate to={`/${userRole}/dashboard`} replace />
  }

  return <>{children}</>
}

export default ProtectedRoute