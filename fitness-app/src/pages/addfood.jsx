import { useState, useMemo } from "react"

import TakeInput from "./components/takeinput"

const Addfood = () => {

    const [food, setFood] = useState([]);

    const addFood = (foodinfo) => {
        setFood(prev => [...prev, foodinfo]);
    };

    return(
        <div>
            <TakeInput addInput={addFood} />            
        </div>
    )
}

export default Addfood;