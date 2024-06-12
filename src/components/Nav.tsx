import { setDarkMode, setHamburgerOpen } from "@redux/mainSlice";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import cn from "@utils/cn";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";

import { IconMoon, IconSun } from "@tabler/icons-react";

import Hamburger from "hamburger-react";
import ContactIcons from "@components/ContactIcons";
import Glow from "@components/ui/Glow";

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
    { name: "Portfolio", ref: refs.projectsRef },
    { name: "Contact", ref: refs.contactRef },
  ];

  const isOpen = useSelector((state: RootState) => state.main.hamburgerOpen);
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.main.darkMode);
  const navigate = useNavigate();
  const location = useLocation();

  function changeTheme() {
    localStorage.setItem("theme", darkMode ? "light" : "dark");
    dispatch(setDarkMode(!darkMode));
  }

  function handleNavItemClick(ref: React.RefObject<HTMLDivElement>) {
    // if the ref is portfolio route to /portfolio else scroll to the ref
    if (ref === refs.projectsRef) {
      navigate("/portfolio");
      return;
    }
    ref.current?.scrollIntoView({ behavior: "smooth" });
    dispatch(setHamburgerOpen(false));
  }

  const animationClass = "transition-opacity ease-in duration-1000";

  return (
    <div id="top" className={cn(className, "flex flex-col py-5 relative")}>
      <div className="flex justify-between items-center">
        <div
          className="text-header select-none cursor-pointer tablet:text-lg tablet:text-nowrap tablet:font-bold"
          onClick={() => navigate("/")}
        >
          Devon Thibodeau
        </div>
        <div className="flex justify-between mobile:hidden">
          {location.pathname !== "/portfolio" &&
            navItems.map((item) => (
              <div
                key={item.name}
                className="cursor-pointer px-5 flex items-center select-none hover:underline"
                onClick={() => handleNavItemClick(item.ref)}
              >
                {item.name}
              </div>
            ))}
          <div className="cursor-pointer px-5 flex items-center select-none">
            {darkMode ? (
              <IconMoon onClick={changeTheme} className="text-accent" stroke={3} />
            ) : (
              <IconSun onClick={changeTheme} className="text-offaccent" stroke={3} />
            )}
          </div>
        </div>
        <div className="hidden mobile:block z-[55] overflow-hidden">
          <Hamburger
            toggled={isOpen}
            toggle={() => {
              dispatch(setHamburgerOpen(!isOpen));
            }}
          />
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-bg text-text z-50 hidden flex-col items-center  mobile:flex">
          <Glow
            position="center"
            className={cn(
              "bg-accent dark:bg-glow h-[250px] w-[250px] opacity-100 dark:opacity-65  pointer-events-none"
            )}
          />
          <div className="h-1/5 opacity-10"></div>
          {location.pathname !== "/portfolio" &&
            navItems.map((item) => (
              <div
                key={item.name}
                className={cn(
                  "cursor-pointer py-2 text-lg hover:underline",
                  animationClass,
                  isOpen ? "opacity-100" : "opacity-0"
                )}
                onClick={() => handleNavItemClick(item.ref)}
              >
                {item.name}
              </div>
            ))}
          <div className="cursor-pointer py-2 text-lg">
            {darkMode ? (
              <IconMoon onClick={changeTheme} className="text-accent" stroke={3} />
            ) : (
              <IconSun onClick={changeTheme} className="text-offaccent" stroke={3} />
            )}
          </div>
          <ContactIcons className="mobile:flex mobile:flex-row z-50" />
        </div>
      )}
    </div>
  );
}

export default Nav;
