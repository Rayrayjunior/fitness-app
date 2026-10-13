import { useState } from "react";

const takeKcal = ( { addkcal } ) => {

    const [name, setName] = useState("");
    const [energy, setEnergy] = useState("");
    const [grams, setGrams] = useState(""); 

    const addtoFood = () => {

        if(name.trim() === "") return;

        const foodinfo = {
            name: name,
            energy: energy,
            kcal: kcal,
            id: Date.now()
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

    const takeKcal = (event) => {

        setKcal(event.target.value);
    }

    return(
        <div>
            <input onChange={takeName} type="text" value={name} placeholder="banana" />
            <input onChange={takeEnergy} type="number" value={energy} placeholder="22" />
        
            <button onClick={addtoFood}>Add Food</button>
        </div>
    )
};


export default takeKcal;