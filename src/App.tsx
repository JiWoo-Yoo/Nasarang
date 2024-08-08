import { useState } from 'react'
import './App.css'
import { MainPage } from './components/MainPage.tsx';
import { LoadingScreen } from './components/LoadingScreen.tsx';
import { useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 인위적 loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
    {isLoading?
      <LoadingScreen />
       :
       <>
       <h1 className="title">NASARANG</h1> 
       <div className="card">
          <MainPage/>
        </div>
        </>
    }
    </>
  )
}

export default App
