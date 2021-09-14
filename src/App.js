import React,{useState,useEffect} from "react";
// eslint-disable-next-line import/no-named-as-default-member
import Board from "./components/Board";
import WinnerFinderFunction from "./WinnerFinderFunction"
import History from "./components/History";
import WinnerMsg from "./components/WinnerMsg";

import "./styles/style.scss";

  const App = () => {
        
    const [count,setCounter] =useState(0);
    const [boardValue,setBoardValue] = useState(Array(9).fill(null))
    const [isplayerX,setPlayerX]     = useState(false)
    // eslint-disable-next-line prefer-const
    let [winnerState,setWinnerState]         = useState('')
    const [history,setHistory] = useState({board:[],player:[]})
    const [moveCommand,setMoveCommand] = useState(false)
    const [winnerSquares,setWinnerSquares] = useState([])
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

    
    
      const clickHandler = (position) =>{
          if(moveCommand){
            return
          } // this is to stop clicking after using timeMachine Feature(history)
         if(winnerState){
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
    
    const {playerName,playerIndex} = WinnerFinderFunction(boardValue)
    // console.log(playerName,"Playername",playerIndex,"WinnerObj")
    // eslint-disable-next-line no-console
    // console.log(winner)
    // console.log("History :",history)

    setWinnerState(playerName)
    setWinnerSquares(playerIndex)
    return () => {
      // eslint-disable-next-line no-console
      // console.log("boardValue unmounted")
    }
  },[boardValue])

  const newGame =() =>{
    // eslint-disable-next-line no-console
    console.log("btn clik")
    setBoardValue(Array(9).fill(null))
    setPlayerX(false)
    setHistory({board:[],player:[]})
    setMoveCommand(false)
    setWinnerState('')
    setCounter(0)
    // set all states to initial state values to restart the Game
  }
  
  
  return(
    <div className="app">
      {/* // eslint-disable-next-line react/jsx-no-comment-textnodes */}
      <h1>Tic-Tac-Toe</h1>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      <WinnerMsg 
        winnerState={winnerState}
        isplayerX={isplayerX}
        boardLength={history.board.length}
      />
      {/* eslint-disable-next-line no-unneeded-ternary */}
      <Board
        clickHandler={clickHandler} 
        boardValue={moveCommand || boardValue}
        winnerSquares={winnerSquares}
      />
      <button 
        type='button'
        onClick={newGame}
      >
        StartGame
      </button>
      <History 
        history={history}
        moveTo={moveTo}
      />
    </div>
  );
}
export default App;
