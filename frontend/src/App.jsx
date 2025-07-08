import { useState } from 'react'
import axios from 'axios'

function App() {
  const [count, setCount] = useState({ })

  const change=(e) =>{
    setCount({...count,[e.target.name]:e.target.value})
  }

 const click=async(e) =>{
  e.preventDefault();


      // await is used inside an async function to pause the code until a promise is resolved.
      //  next line not work untile await promise complete
  try{
    // axios is a javascript library used to  make the http request
    const req= await axios.post("http://localhost:5000/api/user",count)

    setTimeout(() =>{
      window.location.reload();
    },1000)
  }

  

  catch(error){
    console.log("this is a error")


  }

 }



  return (
    <>
    <form onSubmit={click}>
    <div className='h-screen w-full border border-black flex justify-center items-center bg-[url(https://i.pinimg.com/736x/02/a0/4d/02a04d5fc8afb26a98377b2d79e32460.jpg)] bg-no-repeat bg-cover bg-center'>
      <div className='h-[250px] w-[370px] border border-black rounded-2xl overflow-hidden shadow-2xl'>

        <div className='h-[70px] w-[370px] border border-black flex items-center pl-2 font-serif   '>
         <label className='h-[30px] w-[95px] '>username : </label>
         <input type="text" name="username" onChange={change} className='h-[30px] w-[210px] border border-black rounded-lg mt-1 bg-[#f8f3f3]' /> 
        </div>
       
         <div className='h-[70px] w-[370px] border border-black flex items-center p-2 font-serif'>
           <label className='h-[30px] w-[95px]  rounded'>password : </label> 
          <input type="text" name="password" pattern='[A-Z0-9a-z]+'  className='h-[30px] w-[210px] border border-black rounded-lg mt-1 bg-[#f8f3f3]' onChange={change} required />
         </div>


       <button type="submit" className='h-[90px] w-[370px] border flex justify-center items-center '>
         <div className='h-[30px] w-[100px] border  flex  items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 font-serif' >Submit</div>
        </button>
       </div>
    </div>
    </form>
    </>
  )
}

export default App
