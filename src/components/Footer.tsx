import cn from "@utils/cn";

interface FooterProps {
  className?: string;
  [rest: string]: any;
}

function Footer({ className, ...rest }: FooterProps) {
  return (
    <footer className={cn("", className)} {...rest}>
      <div
        className={cn(
          "flex justify-between items-center",
          "tablet:flex-col tablet:space-y-4 tablet:space-x-0",
          "mobile:flex-col mobile:space-y-4 mobile:space-x-0"
        )}
      >
        <a href="#top" className="text-offtext hover:underline">
          Back to Top
        </a>
        <p className="text-center">
          &copy; {new Date().getFullYear()} Devon Thibodeau. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
