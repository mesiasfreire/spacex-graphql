import React , { useState } from 'react';
import Lancamento  from "./Lancamento/Lancamento";

function Rocket({rocket}) {
const [foguetes, setFoguetes] = useState(['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10']);
function handleAddRocket() {
    // foguetes.push(`F1 ${Date.now()}`);
    // console.log(foguetes);
    setFoguetes([...foguetes,`F1 ${Date.now()}`])
}
    return (
        <>
        <h1>{rocket}</h1>
        <ul>
            {foguetes.map(foguet => <li key={foguet}>{foguet}</li>)}
        </ul>
        <button type="button" onClick={handleAddRocket}> Add </button><br/>
        <Lancamento/>
        </>
    );
}

export default Rocket;