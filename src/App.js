import React,{useState,useEffect} from "react";
import Board from "./components/Board";
import Winner from "./Winner"
import History from "./components/History";

import "./styles/style.scss";

  const App = () => {
        
    const [count,setCounter] =useState(0);
    const [boardValue,setBoardValue] = useState(Array(9).fill(null))
    const [isplayerX,setPlayerX]     = useState(false)
    // eslint-disable-next-line prefer-const
    let [winner,setWinner]         = useState('')
    const [history,setHistory] = useState({board:[],player:[]})
    const [moveCommand,setMoveCommand] = useState(false)
    
    // eslint-disable-next-line no-console
    const historyChanges =() =>{
      history.board[count] = (boardValue)
      history.player.push(`${!isplayerX ? 'X': 'O'}`) 
      setCounter(count+1)
      setHistory(history)
    }
    // eslint-disable-next-line no-console
    console.log("history count : ",history,
                   "count",count,"length",
                      Object.keys(history).length)

    const winnerMessage = winner ? 
                  `Winner is ${winner}`
                : `${isplayerX ? 'X' : 'O'}'s Turn`
    
      const clickHandler = (position) =>{
          if(moveCommand){
            return
          } //this is to stop clicking after using timeMachine Feature(history)
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
    
    const moveTo = (movePosition) =>{

        setMoveCommand(history.board[movePosition])
        // moveToPos =  history.board[movePosition]
        // eslint-disable-next-line no-console
        console.log("moveToPos: ",moveCommand)      
    }
    
  useEffect(() => {
    historyChanges()

    winner = Winner(boardValue)
    // eslint-disable-next-line no-console
    // console.log(winner)
    // console.log("History :",history)
    setWinner(winner)

    return () => {
      // eslint-disable-next-line no-console
      // console.log("boardValue unmounted")
    }
  },[boardValue])

  
  
  return(
    <div className="app">
      {/* // eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <h1>Tic-Tac-Toe</h1>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <h3>{winnerMessage}</h3>
      {/* eslint-disable-next-line no-unneeded-ternary */}
      <Board clickHandler={clickHandler} boardValue={moveCommand ?moveCommand: boardValue} />
      <History history={history} moveTo={moveTo} />
    </div>
  );
}
export default App;
