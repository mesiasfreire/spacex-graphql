import React from 'react';


import { useQuery } from '@apollo/client';
import {VSectionContainer } from "./Lancamento.style";
import { getLauches } from "../../graphql/queries";
import ListaLancamentos from "./components/ListaLancamentos/ListaLancamentos";


function Lancamento({limit, search}) {
    const { loading, error, data } = useQuery(getLauches,{
        variables: {limit: limit,}
    });
    if ( loading ) return <p>Carregando dados...</p>;
    if ( error ) return <p>Erro ao processar dados .... </p>

    return (
        <VSectionContainer >
            <ListaLancamentos lancamentos={data} data-testid="listaLancamentos" />
        </VSectionContainer>
    );
}

export default Lancamento;
