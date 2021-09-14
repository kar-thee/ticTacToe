import React from "react";
import Square from "./Square";


const Board = ({boardValue,clickHandler,winnerSquares}) =>{
       // eslint-disable-next-line no-console
       console.log("boardValue : ",boardValue)
       // eslint-disable-next-line no-console
       console.log(winnerSquares,"Winning Squares")

       const renderSquare = (position) =>{    

            const isWinning = winnerSquares.includes(position)

        return(
          <Square
            onClicking={() =>clickHandler(position)} 
            value={boardValue[position]}
            isWinning={isWinning}
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