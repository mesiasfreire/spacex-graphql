import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SideBar from './components/SideBar/SideBar';
import {VContainer} from './css/container.style'
import Home from './pages/Home/Home';
import Lancamentos from './pages/Lancamentos/Lancamentos'

function App() {
  return (
    <Router>
      <VContainer>
      <SideBar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/lancamentos'>
            <Lancamentos />
          </Route>
        </Switch>
      </VContainer>
    </Router>
  );
}

export default App;