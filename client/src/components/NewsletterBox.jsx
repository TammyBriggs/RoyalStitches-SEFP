import React from 'react';

const NewsletterBox = () => {

    // Handler for form submission
    const onSubmitHandler = (event) => {
        event.preventDefault(); // Prevent default form submission
    };

  return (
    <div className='text-center'>
        {/* Main text */}
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off!</p>
        {/* Subtitle text */}
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
        
        {/* Form for subscription */}
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            {/* Email input field */}
            <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required />
            {/* Submit button */}
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  );
}

export default NewsletterBox;
