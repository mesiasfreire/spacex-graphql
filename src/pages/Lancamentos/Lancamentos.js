import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import Lancamento from "../../components/Lancamento/Lancamento";
import { VContent,VSectionSearchLaunches } from "./Lancamentos.style";
import { VInput, VButton, VInputContainer } from "../../css/htmlElements.style";

const Lancamentos = () => {
    const [limit, setLimit] = useState(10);

    function handleChangeLimit(event) {
        console.log(event.target.value);
        setLimit(event.target.value);
    }

    return (
        <VContent>
             <VSectionSearchLaunches>
                <label htmlFor="pesquisa">Lançamentos: </label>
                <VInputContainer>
                    <VInput type="search" id="pesquisa" placeholder="Buscar ..."/>
                    <VButton><FaSearch/></VButton>
                </VInputContainer>
                <label>Apresentação: </label>
                <select onChange={handleChangeLimit}>
                    <option value='10'>10</option>
                    <option value='25'>25</option>
                    <option value='50'>50</option>
                </select> 
            </VSectionSearchLaunches>
            <Lancamento  limit={parseInt(limit)}/>
        </VContent>
        
    );
   
}
 
export default Lancamentos;