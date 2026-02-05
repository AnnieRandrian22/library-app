import { lazy } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from '../pages/Login';
import AdminLayout from '../layouts/AdminLayout';
import ProtectedRoute from './ProtectedRoute';
import ReaderLayout from '../layouts/ReaderLayout';



//lazy pages
const Dashboard = lazy(
    ()=> import ('../features/admin/pages/Dashboard')
)
const Books = lazy(
    ()=> import ('../features/admin/pages/Books')
)
const Profile = lazy(
    ()=> import ('../features/admin/pages/Profile')
)

const ReaderDashboard = lazy(
    ()=> import ('../features/reader/pages/ReaderDashboard')
)
const ReaderBooks = lazy(
    ()=> import ('../features/reader/pages/ReaderBooks')
)
const ReaderFavorites = lazy(
    ()=> import ('../features/reader/pages/ReaderFavorites')
)
const ReaderProfile = lazy(
    ()=> import ('../features/reader/pages/ReaderProfile')
)




const AppRouter = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/login' element={<Login />}/>
                <Route path='/' element={<Login />}/>
                <Route path='/adminLayout' element={<AdminLayout />}/>

                {/* ADMIN */}
                <Route path='/admin' element={
                    <ProtectedRoute requiredRole="admin">
                        <AdminLayout />
                    </ProtectedRoute>
                }
                >
                    <Route path='dashboard' element={<Dashboard />}/>
                    <Route path='profile' element={<Profile />}/>
                    <Route path='books' element={<Books />}/>
                    <Route path='/admin/*' element={<Navigate to="/admin/dashboard" replace />}/>
                </Route>


                {/* DEADER */}
                <Route path='reader' element={
                    <ProtectedRoute requiredRole="reader">
                        <ReaderLayout />
                    </ProtectedRoute>
                }
                >
                    <Route path='readerDashboard' element={<ReaderDashboard />}/>
                    <Route path='readerBooks' element={<ReaderBooks />}/>
                    <Route path='readerFavorites' element={<ReaderFavorites />}/>
                    <Route path='readerProfile' element={<ReaderProfile />}/>
                    <Route path='/reader/*' element={<Navigate to="/reader/ReaderDashboard" replace />}/>
                </Route>


                <Route path="*" element={<Navigate to="/login" replace />} />

                
                
            </Routes>
        </Router>
      
    </div>
  )
}

export default AppRouter
