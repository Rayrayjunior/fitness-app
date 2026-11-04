import { useState, useMemo } from "react"

import Weight from "../components/takeweight"; // This line brings the component to the page
import Weightdisplay from "../components/weightdisplay";


const WeightTracker = () => {

    const [weight, setWeight] = useState([]);

    // Add a new weight to the existing array.
    const addWeight = (weightDetails) => {
        setWeight(prev => [...prev, weightDetails])
    };
}

export default WeightTracker;