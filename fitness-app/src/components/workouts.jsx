import { useState } from "react";

const takeWorkout = ( { addWorkout } ) => {

    const [name, setName] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [weights, setWeights] = useState("");

    const addtoWorkout = () => {

        if(!name.trim() === "") return;

        const workoutinfo = {
            name: name,
            set: sets,
            reps: reps,
            weight: weights
        };

        addWorkout(workoutinfo);
        setSets("");
        setReps("");
        setWeights("");
    }

    const takeName = (event) => {
        
        setName(event.target.value);
    };
}

export default takeWorkout;