import { NavLink } from "react-router-dom";

const Navbar = () => {

    return(
        <nav>
            <h1>Fitness Tracker</h1>
            
            <NavLink to="/">Home</NavLink>
            <NavLink to="/workout-tracker">Workout Tracker</NavLink>

        </nav>
    )
}

export default Navbar;