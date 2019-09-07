import React from 'react';
import './App.css';
import styled from 'styled-components';
import SlideView from './SlideView';
import Intro from './Intro';
const AppWrapper = styled.div``;

export default function App() {
  return (
    <AppWrapper className='app-wrapper'>
      <Intro />
      <SlideView />
    </AppWrapper>
  );
}
