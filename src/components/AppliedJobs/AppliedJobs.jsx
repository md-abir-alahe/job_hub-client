import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJobsDetails from '../AppliedJobsDetails/AppliedJobsDetails';

const AppliedJobs = () => {
    const appliedJobs = useLoaderData();

    // filter data 
    const [filtered, setFiltered] = useState(appliedJobs);
    const filterByOnSite = () => {
        let tempFilter = [];
        appliedJobs.map(appliedJob=>{
            // console.log(appliedJob.remote_or_onsite === 'Onsite');
            if(appliedJob.remote_or_onsite === 'Onsite'){
                // console.log(appliedJob);
                tempFilter.push(appliedJob);
            }
        })
        // console.log(tempFilter);
        setFiltered(tempFilter);
    }
    const filterByRemote = () => {
        let tempFilter = [];
        appliedJobs.map(appliedJob=>{
            // console.log(appliedJob.remote_or_onsite === 'Onsite');
            if(appliedJob.remote_or_onsite === 'Remote'){
                // console.log(appliedJob);
                tempFilter.push(appliedJob);
            }
        })
        // console.log(tempFilter);
        setFiltered(tempFilter);
    }
    const noFilter = () => {
        setFiltered(appliedJobs);
    }
    // console.log(filtered)

    return (
        <div>
            <div className='py-32 my-9 bg-indigo-100 rounded-md'>
                <h2 className='text-5xl font-extrabold text-center text-indigo-900'>Applied Jobs</h2>
            </div>
            <div className='flex gap-4 items-center justify-center'>
                <p className='font-bold'>Filter By : </p>
                <button onClick={()=>filterByRemote()} className='text-base text-indigo-600 font-semibold px-5 py-2 border-2 border-indigo-500 rounded-md'>remote</button>
                <button onClick={()=>filterByOnSite()} className='text-base text-indigo-600 font-semibold px-5 py-2 border-2 border-indigo-500 rounded-md'>onsite</button>
                <button onClick={()=>noFilter()} className='text-base text-indigo-600 font-semibold px-5 py-2 border-2 border-indigo-500 rounded-md'>All</button>
            </div>
            <div className='py-4 flex flex-col gap-6'>
                {
                    filtered.map((appliedJob) => <AppliedJobsDetails
                        key={appliedJob.id}
                        appliedJob={appliedJob}
                    ></AppliedJobsDetails>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;