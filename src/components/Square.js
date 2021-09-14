import React from "react";

const Square =({value,onClicking,isWinning})=>{
   
    return(
      <>
        <button
          type="button"  
          onClick={onClicking}
          className={`square ${isWinning?'winning':''} ${value ==='X'?'text-green':'text-orange'}`}
          // style={{ fontWeight: isWinning ? 'bold' : 'normal', }} // color: isWinning && 'red'
        >
          {value}
        </button>
      </>
    );
}

export default Square