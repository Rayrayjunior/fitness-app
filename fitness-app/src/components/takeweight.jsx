import { useState } from "react"

const Weight = ( { addWeight } ) => {

    const [weight, setWeights] = useState("");
    const [date, setDate] = useState("");


    const addtoWeight = (event) => {
        event.preventDefault()

        if(weight.trim() === "" || Date.trim() === "" ) return;

        const weightDetails = {
            weight: weight,
            date: date
        };

        addWeight(weightDetails)

        setDate("");
        setWeights("");
    };

    const takeWeights (event) => {
        setWeights(event.target.value);
    };

    const takeDate = (event) => {
        setDate(event.target.value);
    };

    return(
        <div></div>
    )

}

export default Weight;