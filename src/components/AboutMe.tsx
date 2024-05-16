import cn from "@utils/cn";
import React from "react";

interface AboutMeProps {
  className?: string;
  [rest: string]: any;
}

const AboutMe = React.forwardRef<HTMLDivElement, AboutMeProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div className={cn("", className)} ref={ref} {...rest}>
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-br from-accent to-offaccent text-transparent bg-clip-text">
          About Me
        </h2>
        <div
          className={cn(
            "flex space-x-8",
            "tablet:flex-col tablet:space-x-0 tablet:space-y-8"
          )}
        >
          <div className={cn("w-1/3", "tablet:w-full")}>
            <h3 className="text-2xl font-semibold mb-4">Past</h3>
            <div className="h-1 w-15 mb-3 bg-gradient-to-r from-accent to-offaccent " />
            <p className="text-lg text-offtext">
              I discovered my passion for programming when I was just 14 years old.
              Initially, it was a hobby, but I quickly became interested in web
              development and the creative possibilities it offered. Over the
              years, I continued to develop my skills and fell more in love with
              building websites.
            </p>
          </div>
          <div className={cn("w-1/3", "tablet:w-full")}>
            <h3 className="text-2xl font-semibold mb-4">Present</h3>
            <div className="h-1 w-15 mb-3 bg-gradient-to-r from-accent to-offaccent " />
            <p className="text-lg text-offtext">
              Now, as a professional web developer, I am pursuing my dream of
              creating impactful digital experiences. I work with technologies like
              React, TypeScript, and Tailwind CSS, applying my skills in real-world
              projects and gaining practical experience.
            </p>
          </div>
          <div className={cn("w-1/3", "tablet:w-full")}>
            <h3 className="text-2xl font-semibold mb-4">Future</h3>
            <div className="h-1 w-15 mb-3 bg-gradient-to-r from-accent to-offaccent " />
            <p className="text-lg text-offtext">
              Looking ahead, I'm excited about the future of web development and
              the endless opportunities it presents. I'm confident that my passion
              for the field, coupled with my skills, will enable me to make
              meaningful contributions to the industry in the years to come.
            </p>
          </div>
        </div>
      </div>
    );
  }
);

export default AboutMe;
