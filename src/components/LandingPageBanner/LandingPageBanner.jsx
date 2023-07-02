import React from 'react';
import bannerImg from '../../assets/All Images/P3OLGJ1 copy 1.png'

const LandingPageBanner = () => {
    return (
        <div className='grid md:grid-cols-2 gap-6 text-left mt-10 justify-center items-center border-b-2 border-indigo-400'>
            <div>
                <h3 className='text-5xl font-bold  leading-tight'>One Step<br/> Closer To Your<br/><span className='text-indigo-500'>Dream Job</span></h3>
                <p className='text-lg text-slate-600 mt-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='inline-block bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-md font-semibold text-slate-200 mt-8 '>Get Started</button>
            </div>
            <div>
                <img className='w-full' src={bannerImg}/>
            </div>
        </div>
    );
};

export default LandingPageBanner;