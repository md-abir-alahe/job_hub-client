import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid'
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const AppliedJobsDetails = ({appliedJob}) => {
    const {id, company_name, company_logo, job_title, remote_or_onsite, fulltime_or_parttime, location, salary} = appliedJob;
    return (
    <div>
        <div className='w-full p-10 border-2 border-indigo-100 rounded-xl flex md:flex-row flex-col items-center justify-between'>
            <div className='flex md:flex-row flex-col items-center gap-6'>
                <div>
                    <img src={company_logo}/>
                </div>
                <div>
                    <h3 className='mt-8 text-2xl font-semibold text-slate-700'>{job_title}</h3>
                    <p className='text-xl text-gray-500 mt-2'>{company_name}</p>
                    <div className='mt-4 flex gap-4'>
                        <p className='text-base text-indigo-600 font-semibold px-5 py-2 border-2 border-indigo-500 rounded-md'>{remote_or_onsite}</p>
                        <p className='text-base text-indigo-600 font-semibold px-5 py-2 border-2 border-indigo-500 rounded-md'>{fulltime_or_parttime}</p>
                    </div>
                    <div className='flex md:flex-row flex-col md:gap-6 gap-2 mt-4'>
                        <p className='flex items-center text-xl text-gray-500'><MapPinIcon className="h-6 w-6 text-indigo-500" /> {location}</p>
                        <p className='flex items-center text-xl text-gray-500'><CurrencyDollarIcon className="h-6 w-6 text-indigo-500" />Salary: {salary}</p>
                    </div>
                </div>
            </div>
            <Link className='inline-block bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-md font-semibold text-slate-200 mt-8' to={`/job/${id}`}><button>View Details</button></Link>
        </div>
    </div>
    );
};

export default AppliedJobsDetails;