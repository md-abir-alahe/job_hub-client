const handleApplyJob = (id) => {
    addToDb(id);
}

// add data to local storage 
const addToDb = id => {
    let appliedJobs = {}


    // get previous data from local storage
    const storedJobs = localStorage.getItem('applied-job')
    if(storedJobs){
        appliedJobs = JSON.parse(storedJobs)
    }


    // add quantity
    const quantity = appliedJobs[id]
    if(quantity){
        const newQuantity = quantity + 1;
        appliedJobs[id] = newQuantity;
    }
    else{
        appliedJobs[id] = 1;
    }


    localStorage.setItem('applied-job',JSON.stringify(appliedJobs))
}

// get data from from local storage
const getStoredData = () =>{
    let appliedJobs = {};
    // get previous data
    const storedJobs = localStorage.getItem('applied-job');
    if(storedJobs){
        appliedJobs = JSON.parse(storedJobs);
    }
    return appliedJobs;
}

export {
    handleApplyJob,
    getStoredData
}