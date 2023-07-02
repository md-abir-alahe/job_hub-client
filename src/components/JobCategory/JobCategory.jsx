import React from 'react';

const JobCategory = ({jobCategory}) => {
    // console.log(jobCategory.logo)
    return (
        <div className='bg-slate-200 p-10 rounded-md w-full'>
            <img src={jobCategory.logo} />
            <h4 className='text-gray-700 font-bold text-2xl mt-8'>{jobCategory.name}</h4>
            <p className='text-gray-500 text-lg mt-3'>{jobCategory.jobs_available}+ Jobs Available</p>
        </div>
    );
};

export default JobCategory;