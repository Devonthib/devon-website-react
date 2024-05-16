import cn from "@utils/cn";
import React from "react";

import { skillsData } from "@utils/data";

interface SkillsProps {
  className?: string;
  [rest: string]: any;
}

const Skills = React.forwardRef<HTMLDivElement, SkillsProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div className={cn("", className)} ref={ref} {...rest}>
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-br from-accent to-offaccent text-transparent bg-clip-text">
          Skills
        </h2>
        <div
          className={cn(
            "flex space-x-8",
            "tablet:flex-col tablet:space-x-0 tablet:space-y-8"
          )}
        >
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className={cn("w-1/3", "tablet:w-full")}>
              <h3 className="text-2xl font-semibold mb-4">{category}</h3>
              <div className="h-1 w-15 mb-3 bg-gradient-to-r from-accent to-offaccent " />
              <ul className="list-disc list-inside">
                {skills.map((skill) => (
                  <li key={skill} className="text-lg text-offtext">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

export default Skills;
