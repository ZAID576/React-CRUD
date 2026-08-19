import React from 'react'

const Usercard = () => {
  return (
    <div className='p-4 border border-black rounded'>
      
      <div className='h-40 w-40'>
        <img className='object-fit h-full w-full' src="https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>

      <div className='flex flex-col gap-1'>
        <h1>Name</h1>
        <p className='text-sm'>Email</p>
        <p className='text-sm'>Contact</p>
      </div>

      <div className='flex w-full justify-between gap-4'>
        <button className='bg-yellow-700 text-white py-2 px-3 rounded'>Update</button>
        <button className='bg-red-700 text-white py-2 px-3 rounded' >Delete</button>
      </div>

    </div>
  )
}

export default Usercard
