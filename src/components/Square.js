import React from "react";

const Square =({value,onClicking})=>{
   
    return(
      <>
        <button type="button" className="square" onClick={onClicking}>{value}</button>
      </>
    );
}

export default Square