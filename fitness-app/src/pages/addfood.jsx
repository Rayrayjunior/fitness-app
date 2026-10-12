import { useState, useMemo } from "react"

import TakeInput from "../components/takeinput"
import FitnessDisplay from "../components/displayinfo";

const Addfood = () => {

    const [food, setFood] = useState([]);

    const addFood = (foodinfo) => {
        setFood(prev => [...prev, foodinfo]);
    };

    const totalKcal = useMemo(() => {

        const kcalPer100g = item.energy / 4.184;
        const total = (item.grams / 100) * kcalPer100g;

        return total;
        }, [food]);

    return(
        <div>
            <TakeInput addkcal={addFood} />
            <FitnessDisplay food={food} />
        </div>
    )
}

export default Addfood;