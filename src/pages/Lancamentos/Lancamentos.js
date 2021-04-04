import { FaSearch } from "react-icons/fa";

import Lancamento from "../../components/Lancamento/Lancamento";
import { VContent,VSectionSearchLaunches } from "./Lancamentos.style";
import { VInput, VButton, VInputContainer } from "../../css/htmlElements.style";


const Lancamentos = () => {
    return (
        <VContent>
             <VSectionSearchLaunches>
                <label htmlFor="pesquisa">Lançamentos: </label>
                <VInputContainer>
                    <VInput type="search" id="pesquisa" placeholder="Buscar ..."/>
                    <VButton><FaSearch/></VButton>
                </VInputContainer>
                <label>Apresentação: </label>
                <select>
                    <option value='10'>10</option>
                    <option value='25'>25</option>
                    <option value='50'>50</option>
                </select> 
            </VSectionSearchLaunches>
            <Lancamento />
        </VContent>
        
    );
   
}
 
export default Lancamentos;