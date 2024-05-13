import cn from "@utils/cn";

interface NavProps {
  className?: string;
  refs: {
    aboutRef: React.RefObject<HTMLDivElement>;
    skillsRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
    resumeRef: React.RefObject<HTMLDivElement>;
  };
}

function Nav({ className, refs }: NavProps) {
  const navItems = [
    { name: "About", ref: refs.aboutRef },
    { name: "Skills", ref: refs.skillsRef },
    { name: "Projects", ref: refs.projectsRef },
    { name: "Contact", ref: refs.contactRef },
    { name: "Resume", ref: refs.resumeRef },
  ];

  return (
    <div className={cn(className, "flex justify-between py-5")}>
      <div className="text-3xl ">Devon Thibodeau</div>
      <div className="flex justify-between">
        {navItems.map((item) => (
          <div
            key={item.name}
            className="cursor-pointer px-5 flex items-center"
            onClick={() =>
              item.ref.current?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nav;
