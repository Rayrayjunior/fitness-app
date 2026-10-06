import { useState } from "react";

const takeKcal = ( { addkcal } ) => {

    const [name, setName] = useState("");
    const [energy, setEnergy] = useState("");

    const addtoFitness = () => {

        if(name.trim() === "") return;

        const kcalinfo = {
            name: name,
            energy: energy,
            day: Date.now()
        };

        addkcal(addtoFitness);
        setName("");
        setEnergy("");
    }

    const takeName = (event) => {

        setName(event.target.value);
    }

    return(
        <div>
            <input onChange={takeName} type="text" value={name} placeholder="" />
        
            <button onClick={addtoFitness}>Add Food</button>
        </div>
    )
};


export default takeKcal;