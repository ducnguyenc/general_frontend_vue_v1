import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/user/Home"
import UserRegister from "../pages/user/Register"
import UserLogin from "../pages/user/Login"
import UserChat from "../pages/user/Chat"

import Dashboard from "../pages/admin/Dashboard"
import AdminLogin from "../pages/admin/Login"
import AdminRegister from "../pages/admin/Register"

function ListRoute() {
    const user = localStorage.getItem('user');

    const Authen = (Component) => {
        if (!user) {
            return <Navigate to="/" />;
        }
        return Component;
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/chat" element={Authen(<UserChat />)} />

            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/register" element={<AdminRegister />} />
        </Routes>
    )
}

export default ListRoute
