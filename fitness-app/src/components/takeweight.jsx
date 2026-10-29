import { useState } from "react"

const Weight = ( { addWeight } ) => {

    const [date, setDate] = useState("");
    const [weight, setWeights] = useState("");

    const addtoWeight = (event) => {

        if(weight.trim() === "" || Date.trim() === "" ) return;

        const weightDetails = {
            date: day,
            weight: weight
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