import React from 'react';
import { useSelector } from 'react-redux';
import GridCells from './GridCells';
import {v4 as uuidv4} from 'uuid';

export default function ParentGrid() {
    const board = useSelector(state => state.board);
    const gridCount = useSelector(state => state.grid);

    let col = 2;
    let row = 2;
    let boardState = [];

    for (let i = 0; i < col; i++) {
      for (let j = 0; j < row; j++) {
        boardState.push(<GridCells count={board[i][j]} x={i} y={j}/>);
      }
    }
  
  return (
    <>
      <h3 className="text-box">Count: {gridCount}</h3>
      <section className="box-container">
        {boardState.map(item => {
            return (<div key={uuidv4()}>{item}</div>)
          }
        )}
      </section>
    </> 
  )
}