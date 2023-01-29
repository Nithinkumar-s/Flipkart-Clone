import React, { useState } from 'react'
import { FiPlus,FiSearch } from "react-icons/fi"; 
import { FaShoppingCart } from "react-icons/fa";
import { RiAccountPinCircleLine } from "react-icons/ri";
import LogIn from './LogIn';
import { MdClose } from "react-icons/md";



const Navbar = () => {
    const [showLogin,SetShowLogin] = useState(false);

    const showLoginCard = ()=>{
        SetShowLogin(!showLogin)
    }

  return ( 
<div className='fixed'>
<nav className=' bg-blue-0  w-full h-20 items-center flex justify-start  fixed   '>
    <div className='flex justify-start w-[50%] relative left-30'>
        {/* logo and searchbox */}
        <div className=' text-white-0 ml-20  italic'>
            <h1 className=' font-extrabold text-2xl'>Flipkart</h1>
            <div className='flex'><h3>Explore</h3>
            <h3 className='flex ml-1 mr-2 text-[#ffe11b] font-extrabold '>Plus <FiPlus/></h3></div> 
        </div>
        <div className='w-full top-3 relative border-none '>
            <div className='flex'>
            <input type={'text'} className='w-full border-none font-placeholder shadow-lg m-0 h-10 focus:outline-none bg-white-0 placeholder:font-placeholder p-1' placeholder='Search for products,brands and more'>
               
            </input>
            <i className=' bg-white-0 border-none m-0 p-2 font-extrabold text-darkblue-0 relative align-middle'> <button><FiSearch className=' '></FiSearch></button></i>
            </div>
        </div>
    </div>
    {/* cart,more */}
    <div className='flex justify-between relative text-white-0 font-extrabold  text-lg left-10  ml-10' >
        <button className='m-3 ' onClick={showLoginCard}><RiAccountPinCircleLine className='text-2xl'/></button>
        <button className='m-3'>Become a Seller</button>
        <button className='m-3'>More</button>
        <div className='flex flex-row'>
        <FaShoppingCart className=' mt-4 mr-0 ml-2'></FaShoppingCart>
        <button className='m-3 ml-1'>Cart</button>
        </div>

    </div>

</nav>
<div className=' absolute mt-28 w-screen '>
    {showLogin ? <div className='w-[45rem] flex m-auto'><LogIn></LogIn>
    <i className='text-[black] text-5xl cursor-pointer' onClick={showLoginCard}><MdClose/></i>
    </div> : <></>}
    
</div>
 
</div>

    
  )
}

export default Navbar