import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to = "/">
                Home
            </Link>
            <Link to = "/create-book">
                Create Book
            </Link>
            <Link to = "/update-book">
            Update Book
            </Link>
        </div>
    )
}

export default Navbar