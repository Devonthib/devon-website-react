import cn from "@utils/cn";
import { Button } from "@components/ui/button";
import Glow from "@components/ui/Glow";

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
  return (
    <div className="flex mobile:flex-col-reverse">
      <div className="relative w-1/2 p-1 rounded bg-gradient-to-tr from-accent to-offaccent mobile:w-full">
        <div className="w-full h-0 pb-[56.25%] relative">
          <img
            src={image}
            alt={name}
            className="absolute top-0 left-0 w-full h-full object-cover rounded mb-4"
          />
        </div>
      </div>
      <div className="flex flex-col w-1/2 p-4 mobile:w-full mobile:p-0 mobile:pb-4">
        <Glow
          position="center"
          className={cn(
            "bg-glow h-[650px] w-[650px] mr-24 opacity-100 dark:opacity-85",
            "mobile:h-[400px] mobile:w-[400px]"
          )}
        />
        <div className="text-[48px] font-semibold mb-4 mobile:text-[32px]">
          {name}
        </div>
        <div className="text-2xl pt-1 mb-4 mobile:hidden">{description}</div>
        <div className="hidden text-lg py-2  mobile:block">{description}</div>
        {link && (
          <Button
            onClick={() => {
              window.open(link);
            }}
            size={"default"}
            type="submit"
            variant="gradient-border-animate"
            className={cn(
              "text-lg font-normal text-white py-1 active:scale-95 disabled:cursor-not-allowed h-fit w-fit"
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
