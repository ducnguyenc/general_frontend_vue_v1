import { Routes, Route, resolvePath, useLocation } from "react-router-dom";
import Home from "../pages/user/Home"
import UserRegister from "../pages/user/Register"
import UserLogin from "../pages/user/Login"
import Dashboard from "../pages/admin/Dashboard"
import AdminLogin from "../pages/admin/Login"
import UserProviderContext from "../context/UserContext";

function ListRoute() {

    return (
        <UserProviderContext>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<UserRegister />} />
                <Route path="/login" element={<UserLogin />} />

                <Route path="/admin" element={<Dashboard />} />
                <Route path="/admin/login" element={<AdminLogin />} />
            </Routes>
        </UserProviderContext>
    )
}

export default ListRoute