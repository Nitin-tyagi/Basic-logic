import React from "react";

function Even() {
  const arr = [1, 2, 3, 4, 5, 6];
 let newArr= arr.map((curElem,index,arr)=>{
   return curElem%2===0?<div>{arr[index]}even num </div>:<div>{arr[index]}odd num</div>;
 })
    return (
    <>
     <div>
     <h1>Q-1:find even number</h1>
     {newArr}</div>
     
   
    </>
  );
}

export default Even;
