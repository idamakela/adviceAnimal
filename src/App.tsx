import { useState } from 'react';
import './App.scss';
import Header from './components/Header';
import Animal from './components/Animal';
import Advice from './components/Advice';

/*
Advice animal
    Interact with the desktop animal and get a random advice
    Pixel and dark-mode design
*/

function App() {
  const API_BASE_URL = 'https://api.adviceslip.com/advice';

  return (
    <>
      <Header />
      <main>
        <div className='advice-animal-container'>
          <Animal />
          <Advice />
        </div>
      </main>
    </>
  );
}

export default App;
