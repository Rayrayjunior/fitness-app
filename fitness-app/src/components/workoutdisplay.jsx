

const Workoutdisplay = ( { workout } ) => {

    return(
        <div>
            {workout.map((item) => (
                <p key={item.name}>Name: {item.name} | Reps: {item.reps} | Set: {item.sets} | Weight: {item.weight}</p>
            ))}
        </div>
    )
}

export default Workoutdisplay;