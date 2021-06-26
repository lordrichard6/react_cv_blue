import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import styled from 'styled-components';
import tw from 'twin.macro'
import './App.css';

import { Homepage } from './containers/Homepage'
import { Projects } from './containers/Projects'
import { Page404 } from './containers/404'

function App() {
  const location = useLocation()

  return (
    <AppContainer>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='*' component={Page404} />
        </Switch>
      </AnimatePresence>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`
