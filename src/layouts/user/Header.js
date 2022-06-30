import { Link } from "react-router-dom"

function Header() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>{" | "}
                <Link to="/register">Register</Link>{" | "}
                <Link to="/login">Login</Link>{" | "}
                <Link to="/chat">Chat</Link>
            </nav>
        </div>
    )
}
export default Header