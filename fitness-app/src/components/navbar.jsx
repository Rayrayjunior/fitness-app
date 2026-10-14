import { NavLink } from "react-router-dom";

const Navbar = () => {

    return(
        <nav>
            <h2>Fitness Tracker</h2>
            
            <NavLink to="/">Home</NavLink>
            <NavLink to="/workout-tracker">Workout Tracker</NavLink>

        </nav>
    )
}

export default Navbar;