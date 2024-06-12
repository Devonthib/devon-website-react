import cn from "@utils/cn";
import React, { useRef } from "react";
import { useIsVisible } from "@utils/useIsVisible";
import { skillsData } from "@utils/data";
import Glow from "@components/ui/Glow";

interface SkillsProps {
  className?: string;
  [rest: string]: any;
}

const Skills = React.forwardRef<HTMLDivElement, SkillsProps>(
  ({ className, ...rest }, ref) => {
    const frontendRef = useRef(null);
    const {
      isIntersecting: isVisibleFrontend,
      hasBeenVisible: hasBeenVisibleFrontend,
    } = useIsVisible(frontendRef);

    const backendRef = useRef(null);
    const {
      isIntersecting: isVisibleBackend,
      hasBeenVisible: hasBeenVisibleBackend,
    } = useIsVisible(backendRef);

    const toolsRef = useRef(null);
    const { isIntersecting: isVisibleTools, hasBeenVisible: hasBeenVisibleTools } =
      useIsVisible(toolsRef);

    const animationClass = "transition-transform ease-in duration-1000";

    return (
      <div
        className={cn("relative overflow-visible", className)}
        ref={ref}
        {...rest}
      >
        <Glow
          position="bottom-right"
          className={cn(
            "bg-offaccent h-[200px] w-[200px] mr-24 opacity-100 dark:opacity-50 ",
            "tablet:top-1/2 tablet:left-1/2 tablet:transform tablet:-translate-x-1/2 tablet:-translate-y-1/2"
          )}
        />
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-br from-accent to-offaccent text-transparent bg-clip-text">
          Skills
        </h2>
        <div
          className={cn(
            "flex space-x-8 overflow-hidden",
            "tablet:flex-col tablet:space-x-0 tablet:space-y-8"
          )}
        >
          {Object.entries(skillsData).map(([category, skills], index) => {
            const ref =
              index === 0 ? frontendRef : index === 1 ? backendRef : toolsRef;
            const isVisible =
              index === 0
                ? isVisibleFrontend
                : index === 1
                ? isVisibleBackend
                : isVisibleTools;
            const hasBeenVisible =
              index === 0
                ? hasBeenVisibleFrontend
                : index === 1
                ? hasBeenVisibleBackend
                : hasBeenVisibleTools;
            const delay =
              index === 0 ? "delay-200" : index === 1 ? "delay-500" : "delay-1000";

            return (
              <div
                key={category}
                ref={ref}
                className={cn(
                  "w-1/3",
                  "tablet:w-full",
                  animationClass,
                  hasBeenVisible
                    ? "translate-y-0 mobile:translate-x-0"
                    : isVisible
                    ? "translate-y-0 mobile:translate-x-0"
                    : "translate-y-52 mobile:translate-x-36 mobile:translate-y-0",
                  delay
                )}
              >
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
            );
          })}
        </div>
      </div>
    );
  }
);

export default Skills;
