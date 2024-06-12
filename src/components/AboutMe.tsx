import cn from "@utils/cn";
import React, { useRef } from "react";
import Glow from "@components/ui/Glow";
import { useIsVisible } from "@utils/useIsVisible";

interface AboutMeProps {
  className?: string;
  [rest: string]: any;
}

const AboutMe = React.forwardRef<HTMLDivElement, AboutMeProps>(
  ({ className, ...rest }, ref) => {
    const pastRef = useRef(null);
    const { isIntersecting: isVisiblePast, hasBeenVisible: hasBeenVisiblePast } =
      useIsVisible(pastRef);

    const presentRef = useRef(null);
    const {
      isIntersecting: isVisiblePresent,
      hasBeenVisible: hasBeenVisiblePresent,
    } = useIsVisible(presentRef);

    const futureRef = useRef(null);
    const {
      isIntersecting: isVisibleFuture,
      hasBeenVisible: hasBeenVisibleFuture,
    } = useIsVisible(futureRef);

    const animationClass = "transition-opacity ease-in duration-1000";

    return (
      <div
        className={cn("relative overflow-visible", className)}
        ref={ref}
        {...rest}
      >
        <Glow
          position="bottom-left"
          className={cn(
            "bg-offaccent h-[185px] w-[185px]  opacity-100 dark:bg-glow",
            "tablet:top-1/2 tablet:left-1/2 tablet:transform tablet:-translate-x-1/2 tablet:-translate-y-1/2"
          )}
        />
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-br from-accent to-offaccent text-transparent bg-clip-text">
          About Me
        </h2>
        <div
          className={cn(
            "flex space-x-8",
            "tablet:flex-col tablet:space-x-0 tablet:space-y-8"
          )}
        >
          <div
            ref={pastRef}
            className={cn(
              "w-1/3",
              "tablet:w-full",
              animationClass,
              hasBeenVisiblePast
                ? "opacity-100"
                : isVisiblePast
                ? "opacity-100"
                : "opacity-0",
              "delay-200"
            )}
          >
            <h3 className="text-2xl font-semibold mb-4">Past</h3>
            <div
              className={cn(
                "h-1 w-15 mb-3 bg-gradient-to-r from-accent to-offaccent "
              )}
            />
            <p className="text-lg text-offtext">
              From a young age, I was captivated by the digital world. My journey
              began not with code, but with curiosity—exploring how things worked
              behind the screen. This curiosity soon transformed into a passion for
              web development, where creativity meets logic.
            </p>
          </div>
          <div
            ref={presentRef}
            className={cn(
              "w-1/3",
              "tablet:w-full",
              animationClass,
              hasBeenVisiblePresent
                ? "opacity-100"
                : isVisiblePresent
                ? "opacity-100"
                : "opacity-0",
              "delay-500"
            )}
          >
            <h3 className="text-2xl font-semibold mb-4">Present</h3>
            <div className="h-1 w-15 mb-3 bg-gradient-to-r from-accent to-offaccent " />
            <p className="text-lg text-offtext">
              Today, I am a dedicated web developer, crafting immersive digital
              experiences using cutting-edge technologies like React, TypeScript,
              and Tailwind CSS. My work is a blend of art and science, where each
              project is an opportunity to innovate and push boundaries.
            </p>
          </div>
          <div
            ref={futureRef}
            className={cn(
              "w-1/3",
              "tablet:w-full",
              animationClass,
              hasBeenVisibleFuture
                ? "opacity-100"
                : isVisibleFuture
                ? "opacity-100"
                : "opacity-0",
              "delay-1000"
            )}
          >
            <h3 className="text-2xl font-semibold mb-4">Future</h3>
            <div className="h-1 w-15 mb-3 bg-gradient-to-r from-accent to-offaccent " />
            <p className="text-lg text-offtext">
              The future of web development is a canvas of infinite possibilities.
              I am eager to explore new horizons, leveraging my expertise to create
              solutions that are not only functional but also transformative. My
              goal is to leave a lasting impact on the digital landscape, one line
              of code at a time.
            </p>
          </div>
        </div>
      </div>
    );
  }
);

export default AboutMe;
