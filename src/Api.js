import React, {useState, useEffect} from 'react';


const Api = () => {

  const [userPosts, setUserPosts] = useState([]);

    useEffect(()=>{
      fetch("https://my-json-server.typicode.com/typicode/demo/posts")
      .then((response)=> response.json())
      .then((json)=> 
        setUserPosts(json)
      )


    },[])

  return (
    <div>
    <h1>Q-4:call API</h1>
      {
        userPosts.map((posts,index) => (
          <p key={index}><span>id:{posts.id}</span><br/><span>title:{posts.title}</span></p>
        ))
      }
    </div>
  )
}

export default Api;