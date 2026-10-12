

const FitnessDisplay = ( { food } ) => {

    return(
        <div>
            {food.map((item) => (
                <p key={item.id}>Name: {item.name} | </p>
            ))}
        </div>
    )
}

export default FitnessDisplay;