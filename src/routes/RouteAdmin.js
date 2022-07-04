import { Route, Navigate, Routes } from "react-router-dom";

import Dashboard from "../pages/admin/Dashboard"
import AdminLogin from "../pages/admin/Login"
import AdminRegister from "../pages/admin/Register"
import NotFound from "../pages/NotFound";

export default function RouteAdmin() {
    const Authen = (Component) => {
        const pathNameFull = window.location.pathname
        const pathNameArray = pathNameFull.split("/")
        const pathName = pathNameArray[1]

        if (pathName === 'admin') {
            const admin = localStorage.getItem('admin')

            if (!admin) {
                return <Navigate to="/admin" />
            }
            return Component
        }
    }

    return (
        <Routes>
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/register" element={<AdminRegister />} />
            <Route path="/admin/a" element={Authen(<AdminRegister />)} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
