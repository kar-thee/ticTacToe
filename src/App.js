import React,{useState,useEffect} from "react";
import Board from "./components/Board";
import Winner from "./Winner"

import "./styles/style.scss";

  const App = () => {
    
    const [boardValue,setBoardValue] = useState(Array(9).fill(null))
    const [isplayerX,setPlayerX]     = useState(false)
    // eslint-disable-next-line prefer-const
    let [winner,setWinner]         = useState('')
    
    const winnerMessage = winner ? 
                  `Winner is ${winner}`
                : `${isplayerX ? 'X' : 'O'}'s Turn`
    
        const clickHandler = (position) =>{
         if(winner){
           return
         } // this is to stop click function after getting a Winner
         if(boardValue[position]){
             return 
         } // this is to stop changing by clicking again
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

  useEffect(() => {
    winner = Winner(boardValue)
    // eslint-disable-next-line no-console
    console.log(winner)
    setWinner(winner)
    return () => {
      // eslint-disable-next-line no-console
      console.log("boardValue unmounted")
    }
  }, [boardValue])

  return(
    <div className="app">
      {/* // eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <h1>Tic-Tac-Toe</h1>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <h3>{winnerMessage}</h3>
      <Board clickHandler={clickHandler} boardValue={boardValue} />
    </div>
  );
}
export default App;
