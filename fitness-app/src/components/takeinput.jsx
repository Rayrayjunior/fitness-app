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
            grams: Number(grams),
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

    const takeGrams = (event) => {

        setGrams(event.target.value);
    }

    return(
        <div>
            <h1>Kcal Calculator</h1>
            
            <input onChange={takeName} type="text" value={name} placeholder="banana" />
            <input onChange={takeEnergy} type="number" value={energy} placeholder="1200kj" />
            <input onChange={takeGrams} type="number" value={grams} placeholder="30g" />
        
            <button onClick={addtoFood}>Add Food</button>
        </div>
    )
};


export default takeKcal;