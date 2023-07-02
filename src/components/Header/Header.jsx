import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
//   console.log(open);

  return (
    <div className="grid grid-cols-2 md:grid-cols-6  justify-between items-center">
      <div className="w-full">
        <Link to={`/`}><p className="text-xl sm:text-2xl font-bold m-0">JobHub</p></Link>
      </div>

      <nav className="md:col-span-4 my-0 mx-auto">
        <div onClick={() => setOpen(!open)} className="md:hidden">
          <span className="m-auto">
            {open === true ? (
              <XMarkIcon className="h-6 w-6 text-indigo-800 m-0" />
            ) : (
              <Bars4Icon className="h-6 w-6 text-indigo-800 m-0" />
            )}
          </span>
        </div>
        <ul className={`flex flex-col md:flex-row md:gap-6 font-bold absolute md:static ${open ? 'top-14': '-top-48'}`}>
          <Link
            className=" text-indigo-950 hover:text-indigo-600"
            to={`/statistics`}
          >
            Statistics
          </Link>
          <Link
            className=" text-indigo-950 hover:text-indigo-600"
            to={`/applied-jobs`}
          >
            Applied Jobs
          </Link>
          <Link className=" text-indigo-950 hover:text-indigo-600" to={`/blog`}>
            Blog
          </Link>
        </ul>
      </nav>
      <div className="ms-auto">
        <Link
          className="hidden md:inline-block bg-indigo-600 text-indigo-50 px-4 py-3 hover:bg-indigo-800 m-auto rounded-md font-semibold"
          to={``}
        >
          <button>Start Applying</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
