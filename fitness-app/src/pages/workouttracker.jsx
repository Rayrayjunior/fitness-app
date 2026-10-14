import { useState, useMemo } from "react"

import Workout from "../components/takeinput"


const WorkoutTracker = () => {

    const [workout, setWorkout] = useState([]);
    
    const addworkout = (workoutinfo) => {
        setWorkout(prev => [...prev, workoutinfo]);
    }


    return (
        <div>
            <h1>Workout Tracker</h1>
        </div>
    );
};

export default WorkoutTracker;
