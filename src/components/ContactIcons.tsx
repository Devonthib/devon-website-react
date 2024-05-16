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
      <div className="fixed bottom-0 left-5 flex flex-col space-y-4  items-center mobile:hidden">
        <a
          href="mailto:your-email@example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconMailFilled size={32} className="hover:text-text/50" />
        </a>
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin size={32} className="hover:text-text/50" />
        </a>
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithubFilled size={32} className="hover:text-text/50" />
        </a>

        <div className="h-44 w-[6px] bg-text rounded-t-full" />
      </div>
    </>
  );
}

export default ContactIcons;
