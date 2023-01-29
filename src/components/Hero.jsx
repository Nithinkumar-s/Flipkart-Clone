import React from 'react' 

const Hero = () => {
    const grocery = require('../images/grocery.png')
    const Mobiles = require('../images/mobile.png')
    const Fashion = require('../images/fashion.png')
    const Ectronics = require('../images/elec.png')
    const Home = require('../images/home.png')
    const Appliances = require('../images/appli.png')
    const Travel = require('../images/travel.png')
    const Top = require('../images/top.png')
    const Toys = require('../images/toys.png')
    const bike = require('../images/bike.png')
  return (
    <div className=' top-20 relative bg-white-0 w-full h-[9rem] justify-center font-bold   text-lightdark-0  '>
        <div className='flex justify-between mx-28 top-6 relative text-center content-center'>
        <div className='flex flex-col mr-3 relative cursor-pointer '>
            <img src={grocery} alt ='Grocery'  width={50} className='m-auto'/>
            <button>Grocery</button></div>
        <div className='flex flex-col mr-3 cursor-pointer'>
            <img src={Mobiles}   width={50} className='m-auto'/>
            <button>Mobiles</button></div>
        <div className='flex flex-col mr-3 cursor-pointer'>
            <img src={Fashion}   width={50} className='m-auto'/>
            <button>Fashion</button></div>
        <div className='flex flex-col mr-3 cursor-pointer'>
            <img src={Ectronics}   width={50} className='m-auto'/>
            <button>Ectronics</button></div>
        <div className='flex flex-col mr-3 cursor-pointer'>
            <img src={Home}   width={50} className='m-auto'/>
            <button>Home</button></div>
        <div className='flex flex-col mr-3 cursor-pointer'>
            <img src={Appliances}   width={50} className='m-auto'/>
            <button>Appliances</button></div>
        <div className='flex flex-col mr-3 cursor-pointer'>
            <img src={Travel}   width={50} className='m-auto'/>
            <button>Travel</button></div>
        <div className='flex flex-col mr-3 cursor-pointer'>
            <img src={Top}   width={50} className='m-auto'/>
            <button>Top Offers</button></div>
        <div className='flex flex-col mr-3 justify-center align-center cursor-pointer'>
            <img src={Toys}   width={50} className='m-auto'/>
            <button>Beauty, Toys & More</button></div>
        <div className='flex flex-col cursor-pointer'>
            <img src={bike}   width={50} className='m-auto'/>
            <button>Two Wheelers</button></div>
        </div>

    </div>
  )
}

export default Hero