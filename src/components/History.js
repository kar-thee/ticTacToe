import React from 'react'

const History = ({history,moveTo}) => {
     // eslint-disable-next-line no-console
     console.log("History True", history)
    
    
    return (
      <>
        <ul>
          {history.board.map( (elem,index) => {
              
              return(
                
                <li key={index} style={{listStyle:'none',padding:'3px',textAlign:'center'}}>
                  <button type="button" onClick={()=>(moveTo(index))}>
                    {
                        (index>0) ? `Move : ${index} and Played by  ${history.player[index]}` : "Initial Move"
                    }
                  </button>
                </li>
              )
          })}
          
        </ul>
      </>
    )
}

export default History
