import cn from "@utils/cn";
import devonImage from "@assets/devon256.png";
import { Button } from "@components/ui/button";
import Glow from "@components/ui/Glow";

import { useIsVisible } from "@utils/useIsVisible";
import { MutableRefObject, useRef } from "react";

interface IntroProps {
  className?: string;
  [rest: string]: any;
}

function Intro({ className, ...rest }: IntroProps) {
  const introText = useRef(null);
  const isVisibleIntro = useIsVisible(introText);

  const introImage = useRef(null);
  const isVisibleImage = useIsVisible(introImage);

  const animationClass = "transition-opacity ease-in duration-1000";

  return (
    <div
      className={cn(
        "relative overflow-visible",
        "flex items-center",
        "tablet:flex-col tablet:items-start",
        className
      )}
      {...rest}
    >
      <Glow
        position="left-middle"
        className={cn(
          "bg-accent h-[350px] w-[350px] ml-36 opacity-35 dark:opacity-25",
          "tablet:top-0 tablet:ml-0 tablet:mt-36"
        )}
      />
      <Glow
        position="right-middle"
        className={cn(
          "bg-strong h-[250px] w-[250px] mr-24 mt-12 opacity-100 dark:opacity-65",
          "tablet:bottom-0 tablet:left-1/2 tablet:transform tablet:-translate-x-1/2 tablet:mt-36"
        )}
      />

      <div
        ref={introText}
        className={cn(
          "w-1/2 z-10",
          "tablet:w-full",
          "mobile:w-full",
          animationClass,
          isVisibleIntro ? "opacity-100" : "opacity-0"
        )}
      >
        <span className="text-text">Hello! I am</span>
        <h1 className="text-4xl font-bold">Devon Thibodeau</h1>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-xl font-semibold bg-gradient-to-br from-accent to-offaccent text-transparent bg-clip-text">
            Web & Mobile Developer
          </span>
          <div className="w-2 h-2 bg-green rounded-full animate-pulse outline outline-text/10"></div>
        </div>
        <p className="my-4 text-lg text-offtext">
          I'm a passionate Developer based in Georgia, specializing in React, React
          Native, TypeScript, and Tailwind CSS. I am committed to creating visually
          stunning and user-friendly websites. I look forward to exploring new
          opportunities to enhance my skills and contribute to exciting projects.
        </p>
        <Button
          size={"default"}
          type="submit"
          variant="gradient-border-animate"
          className={cn(
            "text-base font-normal text-white py-1 active:scale-95 active"
          )}
          onClick={() => {
            window.open("mailto:devonthibodeau@gmail.com");
          }}
        >
          Email me
        </Button>
      </div>
      <div
        ref={introImage}
        className={cn(
          "w-1/2 p-4 flex justify-end",
          "tablet:w-full tablet:justify-center",
          animationClass,
          isVisibleImage ? "opacity-100" : "opacity-0"
        )}
      >
        <img
          src={devonImage}
          alt="Devon Thibodeau"
          className={cn(
            "w-80 h-80 object-cover rounded-full shadow-lg",
            "tablet:w-48 tablet:h-48 tablet:mt-12",
            "z-10"
          )}
        />
      </div>
    </div>
  );
}

export default Intro;
