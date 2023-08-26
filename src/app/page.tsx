"use client"
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [count , setCount] = useState(0);
    const handleIncrement = () =>{
        setCount(count + 1)
    }

    const handleDecrement = () =>{
      if(count > 0){
        setCount(count - 1)
      } else{
        setCount(0);
      }
    }

    const handleReset = () => {
      setCount(0);
    }


  return (
    <main className="flex flex-col">
       <div className='d-flex justify-content-center align-items-center'>
      <div>
          <p className='text-center mt-20 text-8xl'>{count}</p>
          <div className = 'flex lg:flex-row sm:flex-col justify-center mt-5 gap-2'>
              <button onClick={handleIncrement} className = "bg-green-600 btn px-5 py-3 rounded">Increment</button>
              <button  onClick={handleDecrement} className = "bg-red-500 btn px-5 py-3 rounded">Decrement</button>
              <button  onClick={handleReset} className = "bg-blue-500 btn px-5 py-3 rounded">Reset</button>
          </div>
          
      </div>
    </div>
    </main>
  )
}


