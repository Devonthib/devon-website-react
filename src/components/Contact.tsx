import cn from "@utils/cn";
import React from "react";

interface ContactProps {
  className?: string;
  [rest: string]: any;
}

const Contact = React.forwardRef<HTMLDivElement, ContactProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div className={cn("", className)} ref={ref} {...rest}>
        <h2 className="text-3xl font-bold mb-6 bg-gradient-to-br from-accent to-offaccent text-transparent bg-clip-text">
          Contact
        </h2>
        <div
          className={cn(
            "flex space-x-8",
            "tablet:flex-col tablet:space-x-0 tablet:space-y-8",
            "mobile:flex-col mobile:space-x-0 mobile:space-y-8"
          )}
        >
          <div className={cn("w-1/3", "tablet:w-full", "mobile:w-full")}>
            <h3 className="text-2xl font-semibold mb-4">Seeking employment</h3>
            <div className="h-1 w-15 mb-3 bg-gradient-to-r from-accent to-offaccent " />
            <p className="text-lg text-offtext">
              I am open to discussing potential job opportunities or
              collaborations. With experience in web development and software
              engineering, I am interested in roles that allow me to work on
              exciting and challenging projects. If you have a project or role in
              mind, feel free to reach out and let's discuss!
            </p>
          </div>
          <div className={cn("w-1/3", "tablet:w-full", "mobile:w-full")}>
            <h3 className="text-2xl font-semibold mb-4">Lets connect!</h3>
            <div className="h-1 w-15 mb-3 bg-gradient-to-r from-accent to-offaccent " />
            <p className="text-lg text-offtext">
              Networking is key in the tech industry, and I'm always looking to
              meet new people and expand my professional circle. Whether you're a
              fellow developer, designer, or entrepreneur, I'd love to chat and
              learn more about your work. Let's grab a virtual coffee and see where
              the conversation takes us!
            </p>
          </div>
          <div className={cn("w-1/3", "tablet:w-full", "mobile:w-full")}>
            <h3 className="text-2xl font-semibold mb-4">
              Want to build something?
            </h3>
            <div className="h-1 w-15 mb-3 bg-gradient-to-r from-accent to-offaccent " />
            <p className="text-lg text-offtext">
              I have a passion for developing innovative web applications that
              solve complex problems. Whether it's building a custom e-commerce
              platform or a cutting-edge web app, I'm always ready for a new
              challenge. Let's create something amazing together!
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
          <div
            className={cn(
              "flex space-x-4",
              "tablet:flex-col tablet:space-x-0 tablet:space-y-4",
              "mobile:flex-col mobile:space-x-0 mobile:space-y-4"
            )}
          >
            <a
              href="mailto:devonthibodeau@gmail.com"
              className="text-offtext hover:underline"
            >
              Email
            </a>
            <a
              href="https://github.com/devonthib"
              target="_blank"
              rel="noopener noreferrer"
              className="text-offtext hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/devonthib"
              target="_blank"
              rel="noopener noreferrer"
              className="text-offtext hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-offtext hover:underline"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    );
  }
);

export default Contact;
