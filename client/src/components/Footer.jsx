import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img className='mb-5 w-32' src={assets.logo} alt="logo icon" />
                <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.s
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mt-8 mb-3'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-black-1000'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mt-8 mb-3'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-black-1000'>
                    <li>+25079985671</li>
                    <li>royalstitches@gmail.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024 @ TBriggs&RoyalStitches.com - All Rights Reserved.</p>
        </div>

    </div>
  )
}

export default Footer