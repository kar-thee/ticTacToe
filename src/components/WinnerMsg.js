import React from 'react'

// const winnerMessage = winner ? 
//                   `Winner is ${winner}`
//                 : `${isplayerX ? 'X' : 'O'}'s Turn`

const WinnerMsg = ({winnerState,isplayerX,boardLength}) => {
    // eslint-disable-next-line no-console
    console.log(boardLength,"boardlength")
    return (
      <h3>
        {winnerState && `Winner is ${winnerState}`}
        {!winnerState && (boardLength<10) && `${isplayerX ? 'X' : 'O'}'s Turn`}
        {(boardLength>9) && !winnerState && `X and O are Tied`}
      </h3>
    )
}

export default WinnerMsg
