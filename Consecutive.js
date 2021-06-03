import React from "react";

const Consecutive=()=> {
    const arr = [ 0,0,1,1,0,0,0,1,0,0,1,1,1,0];
    let largest = 0;
    let current = 0;
    for (let i = 0; i<arr.length; i++) {
        arr[i] === 0 ? current = 0 : current++;
        if (current > largest) largest = current;
    };
       return (
       <>
        <div>
        <h1>Q-2:find consecutive number</h1>
        {arr}
       <h3> output={largest}</h3></div>
        
      
       </>

  );
}

export default Consecutive;
