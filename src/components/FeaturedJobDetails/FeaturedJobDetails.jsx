import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { MapPinIcon } from '@heroicons/react/24/solid'
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { ClipboardIcon } from '@heroicons/react/24/solid'
import { PhoneIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { handleApplyJob } from '../Utilities/fakedb';

const FeaturedJobDetails = () => {
    const featuredJob = useLoaderData();
    const {id, job_description, job_responsibility, educational_requirements, experiences, salary, job_title, phone, email, location} = featuredJob;


    return (
        <div>
            <div className='py-32 my-9 bg-indigo-100 rounded-md'>
                <h2 className='text-5xl font-extrabold text-center text-indigo-900'>Job Details</h2>
            </div>
            <div className='py-16 grid md:grid-cols-3 grid-cols-1 gap-7'>
                <div className='flex flex-col gap-6 md:col-span-2'>
                     <p className='text-lg text-gray-600 font-medium'><span className='text-gray-800 font-bold'>Job Description: </span>{job_description}</p>
                    <p className='text-lg text-gray-600 font-medium'><span className='text-gray-800 font-bold'>Job Responsibility: </span>{job_responsibility}</p>
                    <p className='text-lg text-gray-600 font-medium'><span className='text-gray-800 font-bold'>Educational Requirements: </span><br/>{educational_requirements}</p>
                    <p className='text-lg text-gray-600 font-medium'><span className='text-gray-800 font-bold'>Experience: </span><br/>{experiences}</p>
                </div>
                <div>
                    <div className='bg-indigo-100 p-7 rounded-md'>
                        <h4 className='text-xl font-bold border-2 border-b-gray-400 py-2'>Job Details</h4>
                        <p className='flex items-center gap-2 my-2'><CurrencyDollarIcon className="h-6 w-6 text-indigo-500" /><span className='font-semibold'> Salary: </span>{salary} (per month)</p>
                        <p className='flex items-center gap-2  my-2'><ClipboardIcon className="h-6 w-6 text-indigo-500" /><span className='font-semibold'>Job Title: </span> {job_title}</p>
                        <h4 className='text-xl font-bold border-2 border-b-gray-400 py-2'>Contact Information</h4>
                        <p className='flex items-center gap-2  my-2'><PhoneIcon className="h-6 w-6 text-indigo-500" /><span className='font-semibold'>Phone:</span>  {phone}</p>
                        <p className='flex items-center gap-2  my-2'><EnvelopeIcon className="h-6 w-6 text-indigo-500" /><span className='font-semibold'>Email: </span> {email}</p>
                        <p className='flex items-center gap-2  my-2'><MapPinIcon className="h-6 w-6 text-indigo-500" /><span className='font-semibold'>Address:</span>  {location}</p>
                    </div>
                    <button onClick={() => handleApplyJob(id)} className='inline-block bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-md font-semibold text-slate-200 mt-8 w-full'>Apply now</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobDetails;