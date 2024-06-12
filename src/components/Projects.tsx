import React, { useEffect, useRef, useState } from "react";
import cn from "@utils/cn";

import { useNavigate } from "react-router-dom";

interface ProjectsProps {
  className?: string;
  [rest: string]: any;
}

const ProjectsComp = React.forwardRef<HTMLDivElement, ProjectsProps>(
  ({ className, ...rest }, ref) => {
    const navigate = useNavigate();

    function handlePortClick() {
      window.scrollTo({ behavior: "instant", top: 0 });
      navigate("/portfolio");
    }

    return (
      <div
        className={cn("flex justify-center items-center ", className)}
        ref={ref}
        {...rest}
      >
        <div className="card-wrapper w-4/5 h-36 mobile:w-11/12  mobile:h-52">
          <div className="card-content flex justify-between mobile:flex-col mobile:py-5">
            <div className="flex flex-col justify-center pl-5 mobile:pl-2">
              <div className="text-black font-black text-2xl">Portfolio</div>
              <div className="text-black text-xl">
                Explore some of my past projects
              </div>
            </div>
            <div className="flex flex-col justify-center items-center pr-5 mobile:p-0">
              <button
                onClick={handlePortClick}
                className="bg-black py-3 px-7 font-bold text-white rounded-full hover:opacity-80 active:scale-95 mobile:px mobile:w-fit"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default ProjectsComp;
