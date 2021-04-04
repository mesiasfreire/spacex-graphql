import { format, parseISO } from "date-fns";
import { pt } from 'date-fns/locale/pt';
import { FaAngleDoubleDown } from "react-icons/fa";

import { VSection, VSectionItems,VSectionShowMore} from '../../Lancamento.style'
import { VListContainer } from './ListaLancamentos.style'

const ListaLancamentos = ({lancamentos}) => {
    if(!lancamentos) return '<p> Não possui lançamentos</p>';
    return(
        <VListContainer>
        {lancamentos.launches.map((launch) => (
        <VSection key={launch.id}>
            <VSectionItems>
                <p>Nome: {launch.mission_name}</p>
                <p>Foguete: {launch.rocket.rocket_name}🚀</p>
            </VSectionItems>
            <VSectionItems>
                <p>Data: { format(parseISO(launch.launch_date_utc),'dd/MM/yyyy HH:mm', { locale: pt }) }</p>
                <p>Local Lancamento: {launch.launch_site.site_name}</p>
                <VSectionShowMore>
                    <FaAngleDoubleDown/> Mostrar mais
                </VSectionShowMore>
            </VSectionItems>
            <a href={launch.links.article_link} target="_blank" rel="noreferrer">Link Artigo</a>
        </VSection>
        ))};
        </VListContainer>
    );    
}

export default ListaLancamentos