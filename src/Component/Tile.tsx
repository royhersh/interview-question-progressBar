import React, { useEffect, useState }  from 'react';
import './tile.scss';

type TileProps = {
  countDownSeconds: number;
}

export const Tile: React.FC<TileProps> = ({countDownSeconds}) => {

  const start = 30;
  const [width, setWidth] = useState(100);
  const [timer, setTimer] = useState(start);

  useEffect(()=>{
    setTimeout(()=>{setWidth(0);},0);
  },[]);

  useEffect(()=>{

    const intervalId = setInterval(()=>{
      

      setTimer(prevTimer=>{
        if(prevTimer <= 0){
          clearInterval(intervalId);
          return 0;
        }
      console.log(prevTimer);
        return prevTimer-1;
      });

    },1000);

    return ()=>{
      clearInterval(intervalId);
    }
  },[])
  
  return (
    <div className="tile">
      <div className='timer'>{timer}</div>
      <div className='progress-bar' style={{
         height: 5,
         width: `${width}%`,
         transition: `width ${30}s linear`,
         backgroundColor: 'red'
      }}></div>
      <div>Lorem Ipsum</div>
    </div>
  );
};