import React from 'react';
import './TicTacToe.css';

const board = [
  'x', null, 'o', 
  'o', 'x', null,
  'x', 'o', null
];

const TicTacToe = () => {
  let i = 0;
  return <div className="tic-tac-toe">
    <h1>Tic-Tac-Toe</h1>
    <div className='board'>{
        board.map((item, index) => {
            i++;
            return <div className='cell' key={i}>
                <span key={index}>{board[index]}</span>
                </div>
        })
    }
    </div>
  </div>
}

export default TicTacToe;