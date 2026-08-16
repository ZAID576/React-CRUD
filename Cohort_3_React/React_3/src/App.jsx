import React, { use, useState } from 'react'

const App = () => {
const [name, setName] = useState("")
console.log(name)
  
  return (
    <div className='flex flex-col gap-5 w-60'>
      <input onChange={(e)=> setName(e.target.value)} className='border-2' type="text" placeholder='Name'/>
      <input className='border-2' type="text" placeholder='Email'/>
      <input className='border-2' type="text" placeholder='Password'/>

      <button className='border-2'>Submit</button>
       <h1>this is -{name}</h1>
    </div>
  )
}

export default App
