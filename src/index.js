import React from 'react';
import { render }  from 'react-dom';
import  GlobalStyle from './global.style.js';
import App from './App'
import { ApolloProvider } from '@apollo/client';

import { client } from './graphql/setup';

function Init() {
  return (
  <ApolloProvider client={client}>
    <React.StrictMode>
     <GlobalStyle/>
     <App />
    </React.StrictMode>
  </ApolloProvider>
  );
}
render(<Init />, document.getElementById('root'));