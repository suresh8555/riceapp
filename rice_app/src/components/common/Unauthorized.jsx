import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white px-6 py-10">
      <div className="max-w-xl w-full text-center">
        <Player
          autoplay
          loop
          src="https://assets7.lottiefiles.com/packages/lf20_myejiggj.json" 
          style={{ height: '300px', width: '300px', margin: '0 auto' }}
        />
        <h1 className="text-4xl md:text-5xl font-bold mt-6 animate-fadeIn text-black">
          Unauthorized Access
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 animate-fadeIn delay-200 text-black">
          You don’t have permission to view this page. Please login or contact the administrator.
        </p>

        <div className="mt-8 flex justify-center gap-5">
          {/* <button
            onClick={() => navigate('/home')}
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg text-black font-semibold shadow-md"
          >
            Go Home
          </button> */}
          <button
            onClick={() => navigate('/home')}
            style={{color:'black',background:"green", width:"100px"}} className='px-6 py-2 rounded-2 font-semibold text-center mx-1 my-2'>
            Go Home
          </button>
          <button
            onClick={() => navigate('/Auth')}
            style={{color:'black',background:"green", width:"100px"}} className='px-6 py-2 rounded-2 font-semibold text-center'>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
