import React, { useState } from 'react';
import './goboard.css'

const GoBoard = () => {
    const [stones, setStones] = useState(Array.from({ length: 19 }, () => Array.from({ length: 19 }, () => null)));
    const [turn, setTurn] = useState(0)

    function handleClick(row, col) {
        let turnColor = 'black'
        if (turn%2===0){
            turnColor ='black'
        } else {
            turnColor ='white'
        }

        const newStones = [...stones];
        newStones[row][col] = turnColor; // or 'white' depending on whose turn it is
        setStones(newStones);
        setTurn((count)=>count+1)
    }

  return (
    <div className="go-board">
      {stones.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((stone, colIndex) => (
            <div
              key={colIndex}
              className="intersection"
              onClick={() => handleClick(rowIndex, colIndex)}
            >
              {stone && <div className={`stone ${stone}`} />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GoBoard
