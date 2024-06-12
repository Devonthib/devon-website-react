import cn from "@utils/cn";
import { Button } from "@components/ui/button";
import Glow from "@components/ui/Glow";
import { useRef } from "react";
import { useIsVisible } from "@utils/useIsVisible";

interface PortItemProps {
  className?: string;
  name: string;
  image: string;
  description: string;
  shortDescription: string;
  link: string;
  glowLeft: boolean;
  [rest: string]: any;
}

function PortItem({
  className,
  name,
  image,
  description,
  shortDescription,
  link,
  glowLeft,
  ...rest
}: PortItemProps) {
  const itemRef = useRef(null);
  const { isIntersecting: isVisibleItem, hasBeenVisible: hasBeenVisibleItem } =
    useIsVisible(itemRef);

  const animationClass = "transition-opacity ease-in duration-1000";

  return (
    <div
      ref={itemRef}
      className={cn(
        "flex mobile:flex-col-reverse relative overflow-visible",
        animationClass,
        hasBeenVisibleItem
          ? "opacity-100"
          : isVisibleItem
          ? "opacity-100"
          : "opacity-0",
        className,
        "items-center"
      )}
      {...rest}
    >
      <div className="relative w-1/2 mobile:w-full">
        <div className="relative p-1 rounded bg-gradient-to-tr from-accent to-offaccent">
          <div className="w-full h-0 pb-[56.25%] relative">
            <img
              src={image}
              alt={name}
              className="absolute top-0 left-0 w-full h-full object-cover rounded mb-4 z-10"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/2 p-4 mobile:w-full mobile:p-0 mobile:pb-4 relative overflow-visible z-10">
        <Glow
          position={glowLeft ? "left-middle" : "center"}
          className={cn(
            "bg-offaccent h-[350px] w-[350px] absolute opacity-100 dark:opacity-35 z-0",
            glowLeft ? "left-[-525px] top-[-0px] bg-glow" : "right-[-325px]",
            "mobile:h-[250px] mobile:w-[250px] mobile:left-[150px] mobile:opacity-95 overflow-visible"
          )}
        />
        <div className="text-[48px] font-semibold mb-4 mobile:text-[32px] z-10">
          {name}
        </div>
        <div className="text-2xl pt-1 mb-4 mobile:hidden z-10">{description}</div>
        <div className="hidden text-lg py-2 mobile:block z-10">{description}</div>
        {link && (
          <Button
            onClick={() => {
              window.open(link);
            }}
            size={"default"}
            type="submit"
            variant="gradient-border-animate"
            className={cn(
              "text-lg font-normal text-white py-1 active:scale-95 disabled:cursor-not-allowed h-fit w-fit z-10"
            )}
          >
            <div className="p-1">View Project</div>
          </Button>
        )}
      </div>
    </div>
  );
}

export default PortItem;
