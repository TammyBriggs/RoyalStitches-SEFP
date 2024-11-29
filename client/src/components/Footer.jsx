import React from 'react'; // Importing React
import { assets } from '../assets/assets'; // Importing assets (e.g., logo) from the assets folder

const Footer = () => {
  return (
    <div>
        {/* Main Footer Section */}
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            
            {/* Company Description */}
            <div>
                <img className='mb-5 w-32' src={assets.logo} alt="logo icon" /> {/* Displaying logo */}
                <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.s
                </p>
            </div>

            {/* Company Links */}
            <div>
                <p className='text-xl font-medium mt-8 mb-3'>COMPANY</p> {/* Section title */}
                <ul className='flex flex-col gap-1 text-black-1000'>
                    <li>Home</li> {/* Company Link */}
                    <li>About Us</li> {/* Company Link */}
                    <li>Delivery</li> {/* Company Link */}
                    <li>Privacy Policy</li> {/* Company Link */}
                </ul>
            </div>

            {/* Contact Information */}
            <div>
                <p className='text-xl font-medium mt-8 mb-3'>GET IN TOUCH</p> {/* Section title */}
                <ul className='flex flex-col gap-1 text-black-1000'>
                    <li>+25079985671</li> {/* Phone number */}
                    <li>royalstitches@gmail.com</li> {/* Email address */}
                </ul>
            </div>
        </div>

        {/* Footer Copyright */}
        <div>
            <hr /> {/* Horizontal divider */}
            <p className='py-5 text-sm text-center'>
                Copyright 2024 @ TBriggs&RoyalStitches.com - All Rights Reserved.
            </p>
        </div>

    </div>
  )
}

export default Footer; // Exporting the Footer component for use in other parts of the application.
