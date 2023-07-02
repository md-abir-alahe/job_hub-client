import { getStoredData } from "../Utilities/fakedb"

export const jobLoader = async() => {
    const featuredJobsData = await fetch('featuredJobs.json')
    const featuredJobs = await featuredJobsData.json()
    const savedJobs = getStoredData();
    let appliedJobArray = []
    for (const id in savedJobs){
        const foundJob = featuredJobs.find(job => job.id === id)
        if(foundJob){
            foundJob.quantity = savedJobs[id]
            appliedJobArray.push(foundJob)
        }
    }
    return appliedJobArray
}