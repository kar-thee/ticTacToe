import React,{useState} from 'react'

const History = ({history,playerX,moveTo}) => {
     // eslint-disable-next-line no-console
     console.log("History True", history)
    //  const [player,setPlayer] = useState(playerX)
    // {playerX ? 'X': 'O'}
    
    return (
      <>
        <ul>
          {history.map( (elem,index) => {
              
              return(
                
                <li key={index} style={{listStyle:'none',padding:'3px',textAlign:'center'}}>
                  <button type="button" onClick={()=>(moveTo(index))}>
                    {
                        (index>0) ? `Move : ${index} and Current Player is ${playerX ? 'X': 'O'}` : "Initial Move"
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
