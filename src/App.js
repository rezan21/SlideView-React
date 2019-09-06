import React from 'react';
import './App.css';
import styled from 'styled-components';
import SlideView from './SlideView';
import Intro from './Intro';
const AppWrapper = styled.div`
  width: 1400px;
  height: 100vh;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  // justify-content: center;
  margin-top: 50px;
`;

export default function App() {
  return (
    <AppWrapper>
      <Intro />
      <SlideView />
    </AppWrapper>
  );
}
