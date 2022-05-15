import { Link } from "react-router-dom"

function Header() {
    return (
        <div>
            <nav>
                <Link to="/admin">Home</Link>{" | "}
                <Link to="/admin/login">Login</Link>
            </nav>
        </div>
    )
}
export default Header