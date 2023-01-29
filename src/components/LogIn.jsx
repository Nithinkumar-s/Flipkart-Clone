import React, { useState } from 'react'

const loginbg = require('../images/login.png')
 
const LogIn = () => {

    const [showSignUp,SetShowSignUp] = useState(false);
    const [showLogin,SetShowLogin] = useState(true);
    const showSignupCard = ()=>{
        SetShowSignUp(!showSignUp)
        SetShowLogin(!showLogin)
    }
    const showLoginCard = ()=>{
        SetShowLogin(!showLogin)
        SetShowSignUp(!showSignUp)
    }
    
    
  return (
    <div className='w-[45rem] flex justify-items-start bg-white-0 h-[35rem] m-auto '>
        {/* info */}
        {showLogin ? <div className='w-[45rem] flex justify-items-start bg-white-0 h-[35rem] m-auto ' >
        <div className="flex flex-col bg-[#2874F0] w-[40%] font-regular  text-white-0">
            <p className='text-left px-9 pt-9 text-2xl font-semibold '>Login</p>
            <p  className=' text-left p-9 font-medium mt-0'>Get access to your Orders, Wishlist and Recommendations</p>
            <img src={loginbg} className = ' overflow-clip m-auto '></img>
        </div>

        {/* inputs */}
        <div className=' w-[60%] p-10 flex flex-col justify-between'>
            <div className='  flex flex-col h-[50%]'>
                <div className='relative'>
                    <input type="text" id='username' name="name"  className=' border-b focus:border-blue-0  focus:border-b-2 transition-colors  mt-5 w-full placeholder:font-placeholder p-1 font-placeholder focus:outline-none peer' autoComplete='off' />
                    <label for='username' className=' absolute left-0 bottom-0 cursor-text peer-focus:text-xs peer-focus:-top-1 font-semibold transition-all' >Enter Email/Mobile number</label>
                </div>
                <label>
                    <p className=' text-sm mt-7 font-medium'>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                </label>
                    <button className='bg-[#FB641B] h-12 text-white-0 font-bold mt-5 '>Request OTP</button>
            </div>
            <p className=' text-blue-0 font-bold text-center'>
                <button onClick={showSignupCard}>New to Flipkart? Create an account</button>
            </p>

        </div> </div>: <></>
        }
        <div>
        {showSignUp ? 
        
        <div className='w-[45rem] flex justify-items-start bg-white-0 h-[35rem] m-auto '>
        {/* info */}
        <div className="flex flex-col bg-[#2874F0] w-[40%] font-regular  text-white-0">
            <p className='text-left px-9 pt-9 text-2xl font-semibold '>Looks like you're new here!</p>
            <p  className=' text-left p-9 font-medium mt-0'>Sign up with your mobile number to get started</p>
            <img src={loginbg} className = ' overflow-clip m-auto '></img>
        </div>

        {/* inputs */}
        <div className=' w-[60%] p-10 flex flex-col justify-between'>
            <div className='  flex flex-col h-[50%]'>
                <div className='relative'>
                    <input type="text" id='username' name="name"  className=' border-b focus:border-blue-0  focus:border-b-2 transition-colors  mt-5 w-full placeholder:font-placeholder p-1 font-placeholder focus:outline-none peer' autoComplete='off' />
                    <label for='username' className=' absolute left-0 bottom-0 cursor-text peer-focus:text-xs peer-focus:-top-1 font-semibold transition-all' >Enter Mobile number</label>
                </div>
                <label>
                    <p className=' text-sm mt-7 font-medium'>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                </label>
                <button className='bg-[#FB641B] h-12 text-white-0 font-bold mt-5 '>CONTINUE</button>
                <button className='bg-[#fbf6f6] h-12 text-blue-0 font-bold mt-5  shadow-xl ' onClick={showLoginCard}>Existing User? Log in</button>
            </div>
            <p className=' text-blue-0 font-bold text-center'> 
            </p>

        </div> 

    </div>
    : <></>}
        </div>

    </div>
  )
}

export default LogIn