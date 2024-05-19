import './App.css';
import  { useState } from 'react'
import axios from 'axios'




function App() {


  const [content,setContent] = useState();
  const [auth,setAuth] =useState();
  const [authSlug,setAuthSlug] = useState();

 function handleClick(){

  axios.get(`https://api.quotable.io/random`).then((res)=>{
    console.log(res)
    setContent(res.data.content)
    setAuth(res.data.author)
    setAuthSlug(res.data.authorSlug
    )
    
  })

  }

 
  return (
    

    <div className="App">
<h1>{content}</h1>
<h1>{auth}</h1>
<h1>{authSlug}</h1>
<button onClick={handleClick}>Generate</button>
      
    </div>
  );
}

export default App;
