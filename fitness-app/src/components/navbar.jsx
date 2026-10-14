import { NavLink } from "react-router-dom";

const Navbar = () => {

    return(
        <nav>
            <h2>Fitness Tracker</h2>
            
            <NavLink to="/">Home</NavLink>
        </nav>
    )
}

export default Navbar;