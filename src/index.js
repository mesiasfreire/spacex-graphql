import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import { client } from './graphql/setup';
import './index.css';
import Rocket from './components/Rockets'

function App() {
  return (
  <ApolloProvider client={client}>
   <React.StrictMode>
    <Rocket rocket="Qualquer coisa aqui"/>
   </React.StrictMode>,
 </ApolloProvider> 
  );
}
render(<App/>,document.getElementById('root'));
