import { useState, useMemo } from "react"

import TakeInput from "../components/takeinput"
import FitnessDisplay from "../components/displayinfo";

const Addfood = () => {

    const [food, setFood] = useState([]);

    const addFood = (foodinfo) => {
        setFood(prev => [...prev, foodinfo]);
    };

    return(
        <div>
            <TakeInput addkcal={addFood} />
            <FitnessDisplay food={food} />
        </div>
    )
}

export default Addfood;