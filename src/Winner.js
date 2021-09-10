 // eslint-disable-next-line consistent-return
 const Winner = (boardState) => {
    
         const winning = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];          // INDEXES TO GET WIN
    
    for(let i = 0 ; i<winning.length;i++){
        const[a,b,c] = winning[i];
        if(boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]){
            return boardState[a];
        }
         
    }
    
}

     
 
export default Winner;