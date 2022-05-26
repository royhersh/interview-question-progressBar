import React  from 'react';
import './tile.scss';

type TileProps = {
  countDownSeconds: number;
}

export const Tile: React.FC<TileProps> = ({countDownSeconds}) => {
  
  return (
    <div className="tile">
      <div className='timer'>00:30</div>
      <div className='progress-bar'></div>
      <div>Lorem Ipsum</div>
    </div>
  );
};