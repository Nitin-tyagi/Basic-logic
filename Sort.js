import React from "react";

const Sort=()=> {
    const arr= [
        {"id" : 4, "name" : "abc"},
        {"id" : 10, "name" : "ab2"},
        {"id" : 5, "name" : "abc3"},
        {"id" : 6, "name" : "abc5"}
    ];
       
    const len=arr.length;
    for (let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            if(arr[i].id>arr[j].id){
                let temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    // console.log(arr);
       return (
       <>
        <div>
        <h1>Q-5:Array sort</h1>
        {
    arr.map((item,index)=>
    <div key={index}>
     <span>   {item.id}</span>
     <span>   {item.name}</span>
     
    </div>)
}
       </div>
        
      
    
    
    </>
  );
}

export default Sort;
