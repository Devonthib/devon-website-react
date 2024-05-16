import { setDarkMode, setHamburgerOpen } from "@redux/mainSlice";
import { useState } from "react";

import cn from "@utils/cn";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@redux/store";

import { IconMoon, IconSun } from "@tabler/icons-react";

import Hamburger from "hamburger-react";

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

  function changeTheme() {
    localStorage.setItem("theme", darkMode ? "light" : "dark");
    dispatch(setDarkMode(!darkMode));
  }

  function handleNavItemClick(ref: React.RefObject<HTMLDivElement>) {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    dispatch(setHamburgerOpen(false));
  }

  return (
    <div className={cn(className, "flex flex-col py-5 relative")}>
      <div className="flex justify-between items-center">
        <div className="text-header select-none">Devon Thibodeau</div>
        <div className="flex justify-between mobile:hidden">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="cursor-pointer px-5 flex items-center select-none"
              onClick={() => handleNavItemClick(item.ref)}
            >
              {item.name}
            </div>
          ))}
          <div className="cursor-pointer px-5 flex items-center select-none">
            {darkMode ? (
              <IconMoon onClick={changeTheme} className="text-accent" stroke={3} />
            ) : (
              <IconSun
                onClick={changeTheme}
                className="text-offaccent"
                stroke={3}
              />
            )}
          </div>
        </div>
        <div className="hidden mobile:block">
          <Hamburger
            toggled={isOpen}
            toggle={() => {
              dispatch(setHamburgerOpen(!isOpen));
            }}
          />
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg text-text z-50 hidden flex-col items-center justify-center mobile:flex">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="cursor-pointer py-2 text-lg"
              onClick={() => handleNavItemClick(item.ref)}
            >
              {item.name}
            </div>
          ))}
          <div className="cursor-pointer py-2 text-lg">
            {darkMode ? (
              <IconMoon onClick={changeTheme} className="text-accent" stroke={3} />
            ) : (
              <IconSun
                onClick={changeTheme}
                className="text-offaccent"
                stroke={3}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
