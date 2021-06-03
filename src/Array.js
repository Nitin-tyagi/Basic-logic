
import React from "react";

function Array() {

    let arr = [0,1,2,2,3,4,5,6,7,7,8,9,10];
    const len=arr.length;
    let ar = [];
    for (let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            if(arr[i]===arr[j]){
                console.log(arr[j]);
                ar = [...ar, arr[j]];
                    
                
            }
        }
    }
    
    return (
    <>
     <div><h1>Q-3: Write a js code to find the repeated number.
</h1> 
     {ar.map(elem => {
           return <p >{elem}</p>;
        })}
    
     </div>
     
   
    </>
  );
}

export default Array;


