import React from 'react';
import { useRouteError } from "react-router-dom";

  

const ErrorPage = () => {
    const error = useRouteError();
  console.error(error);
    return (
        <div id="error-page" className='h-screen my-auto flex flex-col justify-center items-center'>
          <h1 className='font-extrabold text-6xl text-indigo-500 -mb-9'>
            4<span className='text-black'>0</span>4
          </h1>
          <h1 className='font-extrabold text-9xl'>
            O<span className='text-indigo-500'>op</span>s!
          </h1>
          <p className='text-indigo-500 font-semibold text-xl mt-4'>Something is Going wrong</p>
          <p>
            {/* <i className='text-sm text-yellow-500'>Error : {error.statusText || error.message}</i> */}
          </p>
        </div>
    );
};

export default ErrorPage;