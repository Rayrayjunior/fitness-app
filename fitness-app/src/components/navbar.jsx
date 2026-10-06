import { NavLink } from "react-router-dom";

const Navbar = () => {

    return(
        <nav>
            <h2>Kcal Calculator</h2>
            
            <NavLink to="/">Home</NavLink>
        </nav>
    )
}

export default Navbar;