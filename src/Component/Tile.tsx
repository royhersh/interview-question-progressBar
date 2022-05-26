import React, { useState, useEffect }  from 'react';
import './tile.scss';

type TileProps = {
  countDownSeconds: number;
}

export const Tile: React.FC<TileProps> = ({countDownSeconds}) => {
  const [timeToDisplay, setTimeToDisplay] = useState(countDownSeconds);
  const [progress, setProgress] = useState(0);

  const timer = setTimeout(() => { 
    setTimeToDisplay(timeToDisplay - 1);
  }, 1000);
  if (timeToDisplay === 0) clearTimeout(timer);

  useEffect(() => { 
    requestAnimationFrame(() => {
      setProgress(-100);
    })
  }, [])

  return (
    <div className="tile">
      <div className='timer'>{timeToDisplay}</div>
      <div style={{overflow: 'hidden'}}>
        <div className='progress-bar' style={{transform: `translateX(${progress}%)`, transition: `transform ${countDownSeconds}s linear`}}></div>
      </div>
      <div>Lorem Ipsum</div>
    </div>
  );
};