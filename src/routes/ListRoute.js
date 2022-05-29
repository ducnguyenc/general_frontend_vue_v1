import { Routes, Route } from "react-router-dom";
import UserProviderContext from "../context/UserContext";

import Home from "../pages/user/Home"
import UserRegister from "../pages/user/Register"
import UserLogin from "../pages/user/Login"
import UserChat from "../pages/user/Chat"

import Dashboard from "../pages/admin/Dashboard"
import AdminLogin from "../pages/admin/Login"
import AdminRegister from "../pages/admin/Register"

function ListRoute() {

    return (
        <UserProviderContext>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<UserRegister />} />
                <Route path="/login" element={<UserLogin />} />
                <Route path="/chat" element={<UserChat />} />

                <Route path="/admin" element={<Dashboard />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/register" element={<AdminRegister />} />
            </Routes>
        </UserProviderContext>
    )
}

export default ListRoute