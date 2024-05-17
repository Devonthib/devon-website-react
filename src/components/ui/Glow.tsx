import cn from "@utils/cn";

interface GlowProps {
  className?: string;
  position?:
    | "top-left"
    | "top-middle"
    | "top-right"
    | "right-middle"
    | "bottom-right"
    | "bottom-middle"
    | "bottom-left"
    | "left-middle"
    | "center";
  [rest: string]: any;
}

const positionClasses = {
  "top-left": "top-0 left-0",
  "top-middle": "top-0 left-1/2 transform -translate-x-1/2",
  "top-right": "top-0 right-0",
  "right-middle": "top-1/2 right-0 transform -translate-y-1/2",
  "bottom-right": "bottom-0 right-0",
  "bottom-middle": "bottom-0 left-1/2 transform -translate-x-1/2",
  "bottom-left": "bottom-0 left-0",
  "left-middle": "top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2",
  center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
};

function Glow({ className = "", position = "center", ...rest }: GlowProps) {
  const defaultClasses =
    "w-[250px] h-[250px] rounded-full bg-blue-500 opacity-85 blur-[7.5rem] z-1 pointer-events-none";
  return (
    <div
      className={cn(
        `absolute ${positionClasses[position]} ${defaultClasses}`,
        className
      )}
      {...rest}
    >
      Glow
    </div>
  );
}

export default Glow;
