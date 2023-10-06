import { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import Animal from './components/Animal';
import Advice from './components/Advice';
import checkSpamClick from './utils/checkSpamClick';

type AdviceType = {
  advice: string;
  id: number;
};

function App() {
  const [advice, setAdvice] = useState<AdviceType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const API_BASE_URL: string = 'https://api.adviceslip.com/advice';
  const gitHubRepo: string = 'https://github.com/idamakela/adviceAnimal';

  const handleClick = async (): Promise<void> => {
    const currentTime: number = Date.now();    
    const spamClick: boolean = checkSpamClick(currentTime);

    if (loading || spamClick) {
      return;
    }

    try {
      setLoading(true);
      const timestampQueryParam: string = `?timestamp=${Date.now()}`;
      const apiUrlWithTimestamp: string = API_BASE_URL + timestampQueryParam;
      const response: any = await fetch(apiUrlWithTimestamp);
      const data: any = await response.json();
      setAdvice(data.slip);
      setLoading(false);
    } catch (e) {
      console.log({ e });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(`
    Hi there! 👋 

    Thank you for checking out my website. 
    It's made using React, Vite, TypeScript and SASS (scss modules in my ❤️).

    Feel free to check out the GitHub repo here: 
    ${gitHubRepo}

    And thanks again for stopping by!

    ---------------------------------
    - Ida Mäkelä 🤗
    `);
  }, []);

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
