import React from 'react'

const App = () => {
  return (
    <div className='flex flex-col gap-5 w-60'>
      <input onChange={(e)=>{console.log(e.target.value)}} className='border-2' type="text" placeholder='Name'/>
      <input className='border-2' type="text" placeholder='Email'/>
      <input className='border-2' type="text" placeholder='Password'/>

      <button className='border-2'>Submit</button>
    </div>
  )
}

export default App
