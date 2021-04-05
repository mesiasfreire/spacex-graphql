import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import Lancamento from "../../components/Lancamento/Lancamento";
import { VContent,VSectionSearchLaunches } from "./Lancamentos.style";
import { VInput, VButton, VInputContainer } from "../../css/htmlElements.style";

const Lancamentos = () => {
    const [limit, setLimit] = useState(10);
    const [search, setSearch]= useState('');

    function handleChangeLimit(event) {
        setLimit(event.target.value);
    }
    function handleSearchChange(event) {
        const valor = event.target.value;
            setSearch(valor);
    }

    return (
        <VContent>
             <VSectionSearchLaunches>
                <label htmlFor="pesquisa">Lançamentos: </label>
                <VInputContainer>
                    <VInput type="search" id="pesquisa" placeholder="Buscar ..." onChange={handleSearchChange}/>
                    <VButton><FaSearch/></VButton>
                </VInputContainer>
                <label>Apresentação: </label>
                <select onChange={handleChangeLimit}>
                    <option value='10'>10</option>
                    <option value='25'>25</option>
                    <option value='50'>50</option>
                </select> 
            </VSectionSearchLaunches>
            <Lancamento  limit={parseInt(limit)} search={search}/>
        </VContent>
        
    );
   
}
 
export default Lancamentos;