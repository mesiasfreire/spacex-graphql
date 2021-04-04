import React from 'react';


import { useQuery } from '@apollo/client';
import {VSectionContainer } from "./Lancamento.style";
import { getLauches } from "../../graphql/queries";
import ListaLancamentos from "./components/ListaLancamentos/ListaLancamentos";


function Lancamento({limit}) {
    const { loading, error, data } = useQuery(getLauches,{
        variables: {limit: limit}
    });
    console.log(data);

    if ( loading ) return <p>Carregando dados...</p>;
    if ( error ) return <p>Erro ao processar dados .... </p>
    return (
        <VSectionContainer >
            <ListaLancamentos lancamentos={data} />
        </VSectionContainer>
    );
}

export default Lancamento;
