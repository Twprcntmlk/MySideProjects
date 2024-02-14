import React from 'react';
import "./grid.css"
import { Rnd } from 'react-rnd';
import GoBoard from '../GoBoard_Component/GoBoardComponent'
const Grid = () => {

  return (
  <div style={{width: '800px',height: '400px'}}>
      <Rnd
      default={{
        x: 150,
        y: 205,
        width: 500,
        height: 500,
      }}
      minWidth={100}
      minHeight={100}
      bounds="window"
      disableDragging={false}
    >
      <GoBoard/>
    </Rnd>
  </div>
  );
}

export default Grid;
