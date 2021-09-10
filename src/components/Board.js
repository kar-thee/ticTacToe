import React,{useState} from "react";
import Square from "./Square";

const Board = () =>{
    const [boardValue,setBoardValue] = useState(Array(9).fill(null))
    const [isplayerX,setPlayerX] = useState(false)

    const clickHandler = (position) =>{
         if(boardValue[position]){
             return 
         }
            setBoardValue( (prevState) =>{ 
                return prevState.map( (elem,index) =>{
                            if(index === position){
                                return isplayerX?'X':'O';
                            }
                            return elem
                            
                            });
                         });
         setPlayerX((prev) => !prev)             
    };
    
    const renderSquare = (position) =>{
        return(
          <Square
            onClicking={() =>clickHandler(position)} 
            value={boardValue[position]}
          />
            
          );
    }
    
    return(
      <div className="board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>

        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>

        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>    
            
      </div>
    );
}

export default Board