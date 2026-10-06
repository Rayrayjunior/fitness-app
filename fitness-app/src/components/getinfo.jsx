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
};


export default takeKcal;