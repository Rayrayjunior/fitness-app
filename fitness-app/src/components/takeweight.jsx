import { useState } from "react"

const Weight = ( { addWeight } ) => {

    const [day, setDay] = useState("");
    const [month, setMonth] useState("");
    const [year, setYear] useState("");
    const [weight, setWeights] = useState("");

    const addtoWeight = () => {

        if(weight.trim() === "" ) return;

        const weightDetails = {
            day: Date.now(),

        }
    }

}

export default Weight;