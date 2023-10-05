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

type AdviceType = {
  advice: string;
  id: number;
};

function App() {
  const [advice, setAdvice] = useState<AdviceType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const API_BASE_URL = 'https://api.adviceslip.com/advice';

  const handleClick = async (): Promise<void> => {
    try {
      setLoading(true);
      const response: any = await fetch(API_BASE_URL);
      const data: any = await response.json();
      setAdvice(data.slip);
      setLoading(false);
    } catch (e) {
      console.log({ e });
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className='advice-animal-container'>
          <Animal handleClick={handleClick} />
          <Advice advice={advice} loading={loading} />
        </div>
      </main>
    </>
  );
}

export default App;
