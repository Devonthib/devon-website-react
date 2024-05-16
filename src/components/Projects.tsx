import React, { useState } from "react";
import cn from "@utils/cn";

import { projectsData } from "@utils/data";
import { Button } from "@components/ui/button";

interface ProjectsProps {
  className?: string;
  [rest: string]: any;
}

const Projects = React.forwardRef<HTMLDivElement, ProjectsProps>(
  ({ className, ...rest }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
      );
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
      );
    };

    return (
      <div className={cn("", className)} ref={ref} {...rest}>
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-br from-accent to-offaccent text-transparent bg-clip-text">
          Portfolio
        </h2>
        <div className="relative">
          <div className="flex flex-col tablet:grid tablet:grid-cols-1 tablet:gap-4 items-center">
            <div className="flex w-full justify-center items-center tablet:order-2">
              <button
                onClick={handlePrev}
                className="p-2 bg-card w-12 h-12 rounded-full shadow hover:bg-card/50 transition duration-300 tablet:hidden text-white font-black text-xl6"
              >
                &lt;
              </button>
              <div className="w-full max-w-3xl p-4 bg-card rounded-lg shadow-lg mx-4  tablet:mx-0">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {projectsData[currentIndex].name}
                </h3>
                <div className="relative w-full pb-[56.25%]">
                  <img
                    src={projectsData[currentIndex].image}
                    alt={projectsData[currentIndex].name}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded mb-4"
                  />
                </div>
                <p className="text-lg mb-4 text-accent">
                  {projectsData[currentIndex].description}
                </p>
                {projectsData[currentIndex] && (
                  <Button
                    onClick={() => {
                      window.open(projectsData[currentIndex].link);
                    }}
                    disabled={projectsData[currentIndex].link === ""}
                    size={"default"}
                    type="submit"
                    variant="gradient-border-animate"
                    className={cn(
                      "text-base font-normal text-white py-1 active:scale-95  disabled:cursor-not-allowed"
                    )}
                  >
                    View Project
                  </Button>
                )}
              </div>
              <button
                onClick={handleNext}
                className="p-2 bg-card w-12 h-12 rounded-full shadow hover:bg-card/50 transition duration-300 tablet:hidden font-black text-xl6 text-white"
              >
                &gt;
              </button>
            </div>
            <div className="hidden tablet:flex w-full justify-center items-center tablet:order-3 tablet:mt-4">
              <button
                onClick={handlePrev}
                className="p-2 bg-card w-12 h-12 rounded-full shadow hover:bg-card/50 transition duration-300 text-white font-black text-xl6"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                className="p-2 bg-card w-12 h-12 rounded-full shadow hover:bg-card/50 transition duration-300 ml-4 text-white font-black text-xl6"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Projects;
