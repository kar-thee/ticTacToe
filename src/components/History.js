import React from 'react'

const History = ({history,moveTo}) => {
     // eslint-disable-next-line no-console
     console.log("History True", history)
    
    
    return (
      <div className='history-wrapper'>
        <ul className='history'>
          {history.board.map( (elem,index) => {
              // eslint-disable-next-line no-console
              console.log(history.board.length,"this is elem in history map fun")
              return(
                
                <li 
                  key={index}
                //   style={
                //     {listStyle:'none',padding:'3px',textAlign: (index>0)?'center':''}
                //     }
                >
                  <button 
                    type="button" 
                    onClick={()=>(moveTo(index))} 
                    // style={{fontWeight:((history.board.length-1) === index) ? 'bold':''}}
                    className={`btn-move ${((history.board.length-1) === index) ? 'active':''}`}
                  
                  >
                    {
                        (index>0) ? `Move : ${index} and Played by  ${history.player[index]}` : "Initial Move"
                    }
                  </button>
                </li>
              )
          })}
          
        </ul>
      </div>
    )
}

export default History
