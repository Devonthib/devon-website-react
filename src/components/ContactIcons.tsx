import cn from "@utils/cn";
import {
  IconMailFilled,
  IconBrandLinkedin,
  IconBrandGithubFilled,
} from "@tabler/icons-react";

interface ContactIconsProps {
  className?: string;
  [rest: string]: any;
}

function ContactIcons({ className, ...rest }: ContactIconsProps) {
  return (
    <>
      <div
        className={cn(
          "fixed bottom-0 left-5 flex flex-col space-y-4  items-center ",
          "mobile:hidden mobile:space-x-4 mobile:space-y-0 mobile:w-full mobile:justify-center mobile:left-0 mobile:bottom-5",
          className
        )}
      >
        <div
          className={cn(
            "hidden h-44 w-[6px] bg-text rounded-t-full",
            "mobile:block mobile:w-[100px] mobile:h-[6px] mobile:rounded-r-full"
          )}
        />
        <a
          href="mailto:devonthibodeau@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconMailFilled size={32} className="hover:text-text/50" />
        </a>
        <a
          href="https://www.linkedin.com/in/devonthib"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin size={32} className="hover:text-text/50" />
        </a>
        <a
          href="https://github.com/devonthib"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithubFilled size={32} className="hover:text-text/50" />
        </a>

        <div
          className={cn(
            " h-44 w-[6px] bg-text rounded-t-full",
            "mobile:block mobile:w-[100px] mobile:h-[6px] mobile:rounded-l-full"
          )}
        />
      </div>
    </>
  );
}

export default ContactIcons;
