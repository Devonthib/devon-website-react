import cn from "@utils/cn";
import devonImage from "@assets/devon256.png";
import { Button } from "@components/ui/button";

interface IntroProps {
  className?: string;
  [rest: string]: any;
}

function Intro({ className, ...rest }: IntroProps) {
  return (
    <div
      className={cn(
        "flex items-center",
        "tablet:flex-col tablet:items-start",
        className
      )}
      {...rest}
    >
      <div className={cn("w-1/2 ", "tablet:w-full", "mobile:w-full")}>
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
            window.open("./resume.pdf");
          }}
        >
          View my resume
        </Button>
      </div>
      <div
        className={cn(
          "w-1/2 p-4 flex justify-end",
          "tablet:w-full tablet:justify-center"
        )}
      >
        <img
          src={devonImage}
          alt="Devon Thibodeau"
          className={cn(
            "w-80 h-80 object-cover rounded-full shadow-lg",
            "tablet:w-64 tablet:h-64 tablet:mt-12"
          )}
        />
      </div>
    </div>
  );
}

export default Intro;
