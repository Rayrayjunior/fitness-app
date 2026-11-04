import { useState, useMemo } from "react"

import Weight from "../components/takeweight"; // This line brings the component to the page
import Weightdisplay from "../components/weightdisplay";


const WeightTracker = () => {

    const [weight, setWeight] = useState([]);

    // Add a new weight to the existing array.
    const addWeight = (weightDetails) => {
        setWeight(prev => [...prev, weightDetails])
    };

    return(
        <div>

            <h1>Weight Tracker</h1>
            <Weight addWeight={addWeight} />

            <Weightdisplay weight={weight} />

        </div>
    )
}

export default WeightTracker;