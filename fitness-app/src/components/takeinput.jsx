import { useState } from "react";

const takeKcal = ( { addkcal } ) => {

    const [name, setName] = useState("");
    const [energy, setEnergy] = useState("");

    const addtoFood = () => {

        if(name.trim() === "") return;

        const foodinfo = {
            name: name,
            energy: energy,
            day: Date.now()
        };

        addkcal(foodinfo);
        setName("");
        setEnergy("");
    }

    const takeName = (event) => {

        setName(event.target.value);
    }

    const takeEnergy = (event) => {

        setEnergy(event.target.value);
    }

    return(
        <div>
            <input onChange={takeName} type="text" value={name} placeholder="" />
        
            <button onClick={addtoFitness}>Add Food</button>
        </div>
    )
};


export default takeKcal;