import React, { useEffect, useState }  from 'react';
import './tile.scss';

// Complete the timer without using setInterval.

type TileProps = {
  countDownSeconds: number;
}

export const Tile: React.FC<TileProps> = ({countDownSeconds}) => {

  const start = 30;
  const [width, setWidth] = useState(100);
  const [timer, setTimer] = useState(start);

  useEffect(()=>{
    setWidth(0);
  },[]);

  
  return (
    <div className="tile">
      <div className='timer'>{timer}</div>
      <div  style={{
         height: 5,
         width: `${width}%`,
         transition: `width ${30}s linear`,
         backgroundColor: 'red'
      }}></div>
      <div>Lorem Ipsum</div>
    </div>
  );
};