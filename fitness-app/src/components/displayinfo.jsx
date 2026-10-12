

const FitnessDisplay = ( { food } ) => {

    return(
        <div>
            {food.map((item) => (
                <p key={item.id}>Name: {item.name} | Kilojules : {item.energy} | Date : {item.id}</p>
            ))}
        </div>
    )
}

export default FitnessDisplay;