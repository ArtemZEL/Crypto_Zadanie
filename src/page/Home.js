import React from 'react'
import { Outlet } from 'react-router-dom'
import { Logo } from '../components/Logo'
import Navigation from '../components/Navigation'

function Home() {
  return (
    <header className=' w-full h-full flex flex-col first-letter:
        content-center items-center relative text-white font-nunito
    '>
        <div className='w-screen h-screen bg-gray-400 fixed -z-10' />
        
<Logo/>
<Navigation/>
<Outlet/>

    </header>
  )
}

export default Home