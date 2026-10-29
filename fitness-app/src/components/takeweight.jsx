import { useState } from "react"

const Weight = ( { addWeight } ) => {

    const [weight, setWeights] = useState("");
    const [date, setDate] = useState("");


    const addtoWeight = (event) => {
        event.preventDefault()

        if(weight.trim() === "" || date.trim() === "" ) return;

        const weightDetails = {
            weight: weight,
            date: date
        };

        addWeight(weightDetails)

        setDate("");
        setWeights("");
    };

    const takeWeight = (event) => {
        setWeights(event.target.value);
    };

    const takeDate = (event) => {
        setDate(event.target.value);
    };

    return(
        <form onSubmit={addtoWeight}>
            <h2>Record Weight</h2>

            <input type="number" placeholder="weight in kg" step="0.1" min="1" value={weight} onChange={takeWeight}/>
            <input type="date" value={date} onChange={takeDate}/>

            <button type="weight">Add Weight</button>
        </form>
    )

}

export default Weight;