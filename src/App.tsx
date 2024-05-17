import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@redux/store";
import Home from "@pages/Home";
import { useEffect, useRef } from "react";
import { setDarkMode } from "@redux/mainSlice";

import Nav from "@components/Nav";
import ContactIcons from "@components/ContactIcons";

import cn from "@utils/cn";

function App() {
  const dispatch = useDispatch();
  const isDark = useSelector((state: RootState) => state.main.darkMode);
  const hamburgerOpen = useSelector(
    (state: RootState) => state.main.hamburgerOpen
  );

  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme === "dark") {
      dispatch(setDarkMode(true));
      document.body.classList.add("dark");
    }

    if (selectedTheme === "light") {
      dispatch(setDarkMode(false));
      document.body.classList.remove("dark");
    }

    if (selectedTheme === null) {
      const systemTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      localStorage.setItem("theme", systemTheme ? "dark" : "light");
      dispatch(setDarkMode(systemTheme));
      if (systemTheme) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
  }, [isDark]);

  return (
    <div
      className={cn(
        isDark ? "dark" : "",
        "max-h-[100vh]",
        hamburgerOpen && "tablet:overflow-hidden tablet:no-scrollbar"
      )}
    >
      <div className="flex flex-col h-full w-full bg-bg text-text px-20 mobile:px-4">
        <Nav
          className="h-auto"
          refs={{ aboutRef, skillsRef, projectsRef, contactRef, resumeRef }}
        />
        <Home
          className="h-full overflow-visible"
          refs={{ aboutRef, skillsRef, projectsRef, contactRef, resumeRef }}
        />
        <ContactIcons />
      </div>
    </div>
  );
}

export default App;
