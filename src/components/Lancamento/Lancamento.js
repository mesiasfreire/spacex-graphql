import React from 'react';
import { format, parseISO } from "date-fns";
import { pt } from 'date-fns/locale/pt';

import { useQuery } from '@apollo/client'
import { VSection, VSectionItems } from "./Lancamento.style";
import { getLauches } from "../../graphql/queries";


function Lancamento() {
    const { loading, error, data } = useQuery(getLauches)

    if ( loading ) return <p>Carregando dados...</p>;
    if ( error ) return <p>Erro ao processar dados .... </p>
    return data.launches.map((item) => (
        
        <VSection key={item.id}>
            <VSectionItems>
                <p>Nome: {item.mission_name}</p>
                <p>Foguete: {item.rocket.rocket_name}</p>
            </VSectionItems>
            <VSectionItems>
                <p>Data: { format(parseISO(item.launch_date_utc),'dd/MM/yyyy HH:mm', { locale: pt }) }</p>
                <p>Local Lancamento: {item.launch_site.site_name}</p>
                <p>Mostrar mais</p>
            </VSectionItems>
        </VSection>
    ));
   

}

export default Lancamento;
