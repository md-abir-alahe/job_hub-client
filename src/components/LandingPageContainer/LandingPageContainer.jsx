import React, { useEffect, useState } from "react";
import LandingPageBanner from "../LandingPageBanner/LandingPageBanner";
import JobCategory from "../JobCategory/JobCategory";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import { useLoaderData } from "react-router-dom";

const LandingPageContainer = () => {
  // load featured jobs
  const featuredJobs = useLoaderData();
  //  ---- show all button
  const [availableItems, setAvailableItems] = useState(featuredJobs.slice(0,4));
  const [showClick, setShowClick] = useState(true);
  const showAll = () => {
    setAvailableItems(featuredJobs);
    setShowClick(false);
  };


  // load job category list
  const [jobCategories, setJobCategories] = useState([]);

  useEffect(() => {
    fetch("jobCategoryList.json")
      .then((res) => res.json())
      .then((data) => setJobCategories(data));
  }, []);
  


  return (
    <div>
      <LandingPageBanner></LandingPageBanner>
      {/* job category */}
      <div className="mt-32 flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold">Job category List</h2>
        <p className="text-lg text-stone-600 mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="flex flex-col md:flex-row gap-7 justify-center items-center mt-8 ">
          {jobCategories.map((jobCategory) => (
            <JobCategory
              key={jobCategory.id}
              jobCategory={jobCategory}
            ></JobCategory>
          ))}
        </div>
      </div>
      {/* Featured Job */}
      <div className="mt-32 flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold">Featured Jobs</h2>
        <p className="text-lg text-stone-600 mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="mt-8 flex flex-col gap-10 mb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {
              availableItems.map((featuredJob) => (
                <FeaturedJob
                  key={featuredJob.id}
                  featuredJob={featuredJob}
                ></FeaturedJob>
              ))
            }
          </div> 
          <button onClick={() => showAll()} className={`${showClick ? 'inline-block' : 'hidden'  } inline-block bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-md font-semibold text-slate-200 mx-auto`}>Show All</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPageContainer;
