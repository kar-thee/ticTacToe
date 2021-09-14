import React from "react";

const Square =({value,onClicking,isWinning})=>{
   
    return(
      <>
        <button
          type="button" 
          className="square" 
          onClick={onClicking}
          style={{ fontWeight: isWinning ? 'bold' : 'normal', }} // color: isWinning && 'red'
        >
          {value}
        </button>
      </>
    );
}

export default Square