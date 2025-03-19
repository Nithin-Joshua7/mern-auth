import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className='bg-blue-200 flex justify-between'>

                <h1 className='p-2 font-serif font-bold'>
                    Auth App
                </h1>
                <div className='flex justify-around w-1/2 p-2 font-serif font-light '>
                    <Link to="/">Home</Link>
                    <Link to="/signin">Signin</Link>
                    <Link to="/signup">Signup</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/about">About</Link> 
                </div>
            </div>

        </>
    )
}

export default Header