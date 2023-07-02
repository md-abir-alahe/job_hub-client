import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid'
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const FeaturedJob = ({featuredJob}) => {

    return (
        <div className='w-full p-10 border-2 border-indigo-100 rounded-xl'>
            <img src={featuredJob.company_logo}/>
            <h3 className='mt-8 text-2xl font-semibold text-slate-700'>{featuredJob.job_title}</h3>
            <p className='text-xl text-gray-500 mt-2'>{featuredJob.company_name}</p>
            <div className='mt-4 flex gap-4'>
                <p className='text-base text-indigo-600 font-semibold px-5 py-2 border-2 border-indigo-500 rounded-md'>{featuredJob.remote_or_onsite}</p>
                <p className='text-base text-indigo-600 font-semibold px-5 py-2 border-2 border-indigo-500 rounded-md'>{featuredJob.fulltime_or_parttime}</p>
            </div>
            <div className='flex md:flex-row flex-col md:gap-6 gap-2 mt-4'>
                <p className='flex items-center text-xl text-gray-500'><MapPinIcon className="h-6 w-6 text-indigo-500" /> {featuredJob.location}</p>
                <p className='flex items-center text-xl text-gray-500'><CurrencyDollarIcon className="h-6 w-6 text-indigo-500" />Salary: {featuredJob.salary}</p>
            </div>
            <Link className='inline-block bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-md font-semibold text-slate-200 mt-8' to={`/job/${featuredJob.id}`}><button>View Details</button></Link>
        </div>
    );
};

export default FeaturedJob;