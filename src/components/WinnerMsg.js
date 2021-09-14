import React from 'react'

// const winnerMessage = winner ? 
//                   `Winner is ${winner}`
//                 : `${isplayerX ? 'X' : 'O'}'s Turn`

const WinnerMsg = ({winnerState,isplayerX,boardLength}) => {
    // eslint-disable-next-line no-console
    console.log(boardLength,"boardlength")
    return (
      <div className='status-message'>
        {winnerState && (
        <>
          Winner is 
          {' '}
          <span className={winnerState ==='X' ? "text-green" : "text-orange"}>{winnerState}</span>
        </>
)}
        {!winnerState && (boardLength<10) && (
        <>
          Next Player is 
          {' '}
          <span className={isplayerX?"text-green" : "text-orange"}>
            {isplayerX ? 'X' : 'O'}
          </span>
        </>
)}
        {(boardLength>9) && !winnerState && (
        <>
          <span className='text-green'>X</span>
          {' '}
          and
          {' '}
          <span className='text-orange'>O</span>
          {' '}
          are Tied
        </>
)}
      </div>
    )
}

export default WinnerMsg
