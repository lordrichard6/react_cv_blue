import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro'
import './App.css';

function App() {
  return (
    <AppContainer>
      <h1>Hello world!</h1>
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
