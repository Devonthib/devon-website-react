import cn from "@utils/cn";

interface ResumeProps {
  className?: string;
  [rest: string]: any;
}

function Resume({ className, ...rest }: ResumeProps) {
  return (
    <div className={cn("", className)} {...rest}>
      Resume
    </div>
  );
}

export default Resume;
