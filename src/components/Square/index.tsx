import React from 'react';
import { useState } from 'react';

interface Props {
  squareValue : null;
  onSquareClick : () => void;
}

type player = "X"|"O"|null|boolean ;

const Square = ({squareValue, onSquareClick}:Props) => {     
  return (
    <button 
      className={`cursor-pointer w-32 border-2 border-neutral-500 h-32 flex items-center justify-center text-4xl font-bold
         ${squareValue=="X"?"text-blue-500":"text-red-500" }`
      }
      onClick={onSquareClick}
    >
        {squareValue}
    </button> 
  );
}

export default Square;