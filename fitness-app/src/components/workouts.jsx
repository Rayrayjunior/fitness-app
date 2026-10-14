import { useState } from "react";

const takeWorkout = ( { addWorkout } ) => {

    const [name, setName] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [weights, setWeights] = useState("");

    const addtoWorkout = () => {

        if(name.trim() === "") return;

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

    const takeSets = (event) => {
        
        setSets(event.target.value);
    };

    const takeReps = (event) => {
        
        setReps(event.target.value);
    };

    const takeWeights = (event) => {
        
        setWeights(event.target.value);
    };

    return(
        <div>
            <h1>Workout Tracker</h1>

            <input type="text" placeholder="Bench Press" value={name} onChange={takeName}/>
            <input type="text" placeholder="5" value={sets} onChange={takeSets}/>
            <input type="text" placeholder="15" value={reps} onChange={takeReps}/>
            <input type="text" placeholder="15kg" value={weights} onChange={takeWeights}/>

            <button onClick={addtoWorkout}>Add Workout</button>
        </div>
    )



}

export default takeWorkout;