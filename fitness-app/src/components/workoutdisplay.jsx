

const Workoutdisplay = ( { workout } ) => {

    return(
        <div>
            {workout.map((item) => (
                <p key={item.name}>Name: {item.name} | Reps: {item.reps} | Set: {item.sets} | Weights: {item.weights}</p>
            ))}
        </div>
    )
}