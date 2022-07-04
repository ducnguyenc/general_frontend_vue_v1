import { Route, Navigate, Routes } from "react-router-dom"

import Home from "../pages/user/Home"
import UserRegister from "../pages/user/Register"
import UserLogin from "../pages/user/Login"
import UserLogout from "../pages/user/Logout"
import UserChat from "../pages/user/Chat"
import NotFound from "../pages/NotFound"

export default function RouteUser() {
    const Authen = (Component) => {
        const pathNameFull = window.location.pathname
        const pathNameArray = pathNameFull.split("/")
        const pathName = pathNameArray[1]

        if (pathName !== 'admin') {
            const user = localStorage.getItem('user')

            if (!user) {
                return <Navigate to="/" />
            }
            return Component
        }
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/logout" element={<UserLogout />} />
            <Route path="/chat" element={Authen(<UserChat />)} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
