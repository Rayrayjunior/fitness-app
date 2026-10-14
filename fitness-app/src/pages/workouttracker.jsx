
import { useState, useMemo } from "react";

import Workout from "../components/workouts";
import Workoutdisplay from "../components/workoutdisplay";

const WorkoutTracker = () => {

    // Store all workout entries in an array.
    const [workout, setWorkout] = useState([]);

    // Add a new workout to the existing array.
    const addworkout = (workoutinfo) => {
        setWorkout(prev => [...prev, workoutinfo]);
    };

    // Calculate the total reps across all workouts.
    const totalWorkout = useMemo(() => {
        return workout.reduce((total, item) => {
            const totalReps = item.sets * item.reps;

            // Add the current exercise's reps to the running total.
            return total + totalReps;
        }, 0);
    }, [workout]); // Recalculate when the workout array changes.

    return (
        <div>

            {/* Pass the function to the input component.
                The prop name must match the one it receives. */}
            <Workout addWorkout={addworkout} />

            {/* Display the list of workouts. */}
            <Workoutdisplay workout={workout} />

            {/* Display the total number of reps. */}
            <p>Total Reps: {totalWorkout}</p>
        </div>
    );
};

export default WorkoutTracker;
