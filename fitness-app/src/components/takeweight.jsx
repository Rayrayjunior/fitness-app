import { useState } from "react"

const Weight = ( { addWeight } ) => {

    const [weight, setWeights] = useState("");
    const [date, setDate] = useState("");


    const addtoWeight = (event) => {
        event.preventDefault()

        if(weight.trim() === "" || Date.trim() === "" ) return;

        const weightDetails = {
            weight: weight,
            date: day
        };

        addWeight(weightDetails)

        setDay("");
        setMonth("");
        setYear("");
        setWeights("");
    };

    return(
        <div></div>
    )

}

export default Weight;