import './App.css';
import  { useState } from 'react'
import axios from 'axios'




function App() {


  const [info,setInfo] = useState({
    content:'',
    author:'',
    authorSlug:''
  });
 

 function handleClick(){

  axios.get(`https://api.quotable.io/random`).then((res)=>{
    console.log(res)
    setInfo({
      content:res.data.content,
      author:res.data.author,
      authorSlug:res.data.authorSlug
    })
  
    
  })

  }

 
  return (
    
<div className="m-8 flex items-center justify-center min-h-screen">
<div className="bg-teal-500 rounded-lg border-solid border-white border-2 p-5 text-center container mx-auto shadow-2xl">
<div className='font-mono text-white'>
<h1>{info.content}</h1>
 <h1 className='float-right text-indigo-950'>{info.author !== ''?<span>- </span>:""}{info.author}</h1></div>

{/* <h1>{info.authorSlug}</h1> */}
<br/>
<button type='button' onClick={handleClick} className='bg-indigo-950 w-24 h-8 text-slate-50 rounded-md border-solid border-white border-2 m-4'>Generate</button>

</div>
</div>

  );
}

export default App;
