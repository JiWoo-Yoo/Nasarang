import { useState, useEffect, useRef } from 'react'
import './App.css'
import { MainPage } from './pages/MainPage.tsx';
import { LoadingScreen } from './components/LoadingScreen.tsx';

function App() {
  const outerDivRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 인위적 loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // scroll 구현
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      // wheel이 움직인 방향(+: down)
      const { deltaY } = e;

      if (!outerDivRef.current) return;

      // scroll bar 위쪽 끝의 위치
      const { scrollTop } = outerDivRef.current;

      // 브라우저 화면의 세로 길이
      const pageHeight = window.innerHeight;

      // 현재 페이지 계산
      const currentPage = Math.round(scrollTop / pageHeight);

      if (deltaY > 0) {
        // 스크롤 다운 시 다음 페이지로
        outerDivRef.current.scrollTo({
          top: (currentPage + 1) * pageHeight,
          left: 0,
          behavior: 'smooth',
        });
      } else {
        // 스크롤 업 시 이전 페이지로
        outerDivRef.current.scrollTo({
          top: (currentPage - 1) * pageHeight,
          left: 0,
          behavior: 'smooth',
        });
      }
    };

    const outerDivRefCurrent = outerDivRef.current;
    // outerDivRefCurrent가 null이 아닐 때 이벤트 리스너 추가
    if (outerDivRefCurrent) {
      outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    }

    return () => {
      // outerDivRefCurrent가 null이 아닐 때 이벤트 리스너 제거
      if (outerDivRefCurrent) {
        outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
      }
    };
}, []);
  
  return (
    <>
    {isLoading?
      <LoadingScreen />
       :
      <>
       <div ref={outerDivRef} className="wrapper">
        <div className='pages'>
          <MainPage/>
        </div>
        <div className='pages'>
          <p>hi</p>
        </div>
        <div className='pages'>
        <p>hi</p>
        </div>
       </div>
      </>
    }
    </>
  )
}

export default App
