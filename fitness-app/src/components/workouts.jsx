
import { useState } from "react";

const takeWorkout = ({ addWorkout }) => {

    const [name, setName] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [weights, setWeights] = useState("");

    const addtoWorkout = () => {

        // Don't add a workout without an exercise name.
        if (name.trim() === "") return;

        const workoutinfo = {
            id: Date.now(), // Unique ID for displaying the list.
            name: name,
            sets: Number(sets), // Changed "set" to "sets".
            reps: Number(reps),
            weight: Number(weights)
        };

        addWorkout(workoutinfo);

        // Clear the inputs after adding the workout.
        setName("");
        setSets("");
        setReps("");
        setWeights("");
    };

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

    return (
        <div>
            <h1>Workout Tracker</h1>

            <input
                type="text"
                placeholder="Bench Press"
                value={name}
                onChange={takeName}
            />

            <input
                type="number"
                placeholder="Sets"
                value={sets}
                onChange={takeSets}
            />

            <input
                type="number"
                placeholder="Reps"
                value={reps}
                onChange={takeReps}
            />

            <input
                type="number"
                placeholder="Weight in kg"
                value={weights}
                onChange={takeWeights}
            />

            <button onClick={addtoWorkout}>Add Workout</button>
        </div>
    );
};

export default takeWorkout;
