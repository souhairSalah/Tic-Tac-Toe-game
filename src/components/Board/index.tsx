"use client";
import React from 'react';
import { useState } from 'react';
import Square from '../Square';


const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
 
  function handleClick(i:number){
    if (squares[i]||calculatWinner(squares)) {
      return;
    }   
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O";  
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  const winner = calculatWinner(squares);
  let status;
  if(winner){
    status = "the winner is : "+ (winner);
  }
  else{
    status = 'Next player:' +(xIsNext ? "X" : "O");
  }


  return (
  <div className='grid gap-0'>
    <div className='grid grid-cols-3'>
      <Square squareValue={squares[0]} onSquareClick={() => handleClick(0)}/>
      <Square squareValue={squares[1]} onSquareClick={() => handleClick(1)}/>
      <Square squareValue={squares[2]} onSquareClick={() => handleClick(2)}/>
    </div>
    <div className='grid grid-cols-3'>
      <Square squareValue={squares[3]} onSquareClick={() => handleClick(3)}/>
      <Square squareValue={squares[4]} onSquareClick={() => handleClick(4)}/>  
      <Square squareValue={squares[5]} onSquareClick={() => handleClick(5)}/>  
    </div>
    <div className='grid grid-cols-3'>
      <Square squareValue={squares[6]} onSquareClick={() => handleClick(6)}/>
      <Square squareValue={squares[7]} onSquareClick={() => handleClick(7)}/>  
      <Square squareValue={squares[8]} onSquareClick={() => handleClick(8)}/> 
    </div>
    <div>{status}</div>
  </div>
  )
}

export default Board;

function calculatWinner(index:string[]){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for (let i=0 ; i<lines.length ; i++){
    let[a,b,c]=lines[i];
    if(index[a]&&index[a]===index[b]&&index[a]===index[c]){
      return index[a];
    }
  }
  return null;
}