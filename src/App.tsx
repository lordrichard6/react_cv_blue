import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro'
import './App.css';

import { Homepage } from './containers/Homepage'

function App() {
  return (
    <AppContainer>
      <Homepage />
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
