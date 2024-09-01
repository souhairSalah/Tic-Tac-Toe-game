import React from 'react';
import { useState } from 'react';

interface Props {
  squareValue : null;
  onSquareClick : () => void;
}

type player = "X"|"O"|null|boolean ;

const Square = ({squareValue, onSquareClick}:Props) => {
  // const [squareValue, setSquareValue] = useState<player>(null); 

  // function handleClick (){
  //   setSquareValue("X");
  // }      
  return (
    <button 
      className="cursor-pointer w-32 border-2 border-black h-32"
      onClick={onSquareClick}
    >
        {squareValue}
    </button> 
  );
}

export default Square;