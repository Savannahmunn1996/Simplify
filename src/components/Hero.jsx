import React from 'react'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
<nav className='flex justify-between items-center w-full mb-10 pt-3'>
<img  className ="w-16 h-16" src="../cloud.png"/>
<a  className="ml-60 font-chakra text-blue-600" href="#about">All About Simplify</a>
</nav>

<h1 className='font-rubik text-blue-600 text-6xl  sm:text-8xl text-center'>Simplify</h1>
<h2 className='mt-5 text-3xl text-extrabold font-chakra bg-gradient-to-r from-pink-600 via-blue-500 to-blue-700 bg-clip-text text-transparent'>Work Smarter, Not Harder. Summarize Articles Fast</h2>
    </header>
  )
}

export default Hero