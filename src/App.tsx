import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import styled from 'styled-components';
import tw from 'twin.macro'

import { Navbar } from './components/navbar'
import { Footer } from './components/footer'
import { Homepage } from './containers/Homepage'
import { Projects } from './containers/Projects'
import { Skills } from './containers/Skills'
// import { Blog } from './containers/Blog'
import { Page404 } from './containers/404'
import { ComingSoon } from './containers/comingSoon'

function App() {
  const location = useLocation()

  return (
    <AppContainer>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/blog:slug' component={ComingSoon} />
          <Route exact path='/blog' component={ComingSoon} />
          <Route exact path='/extra' component={ComingSoon} />
          <Route exact path='*' component={Page404} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    justify-center
    flex-wrap
    content-center
    overflow-x-hidden
  `}
`
