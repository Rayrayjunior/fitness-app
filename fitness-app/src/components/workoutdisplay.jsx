

const Workoutdisplay = ( { workout } ) => {

    return(
        <div>
            {workout.map((item) => (
                <p key={item.name}>Name</p>
            ))}
        </div>
    )
}