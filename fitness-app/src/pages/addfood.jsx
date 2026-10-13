import { useState, useMemo } from "react"

import TakeInput from "../components/takeinput"
import FitnessDisplay from "../components/displayinfo";

const Addfood = () => {

    const [food, setFood] = useState([]);

    const addFood = (foodinfo) => {
        setFood(prev => [...prev, foodinfo]);
    };

    const totalKcal = useMemo(() => {
        return food.reduce((total, item) => {
            const toKcal = item.energy / 4.184;
            return total + kcal;

        }, 0);
    }, [food]);

    return(
        <div>
            <TakeInput addkcal={addFood} />
            <FitnessDisplay food={food} />
            <p>Total kcal: {totalKcal.toFixed(2)}</p>
        </div>
    )
}

export default Addfood;