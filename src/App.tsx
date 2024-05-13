import { useSelector, useDispatch } from "react-redux";

import { RootState } from "@redux/store";
import Home from "@pages/Home";
import { useEffect, useRef } from "react";

import { setDarkMode } from "@redux/mainSlice";
import Nav from "@components/Nav";
import Footer from "@components/Footer";

function App() {
  const dispatch = useDispatch();
  const isDark = useSelector((state: RootState) => state.main.darkMode);

  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");

    if (selectedTheme === "dark") {
      dispatch(setDarkMode(true));
    }

    if (selectedTheme === "light") {
      dispatch(setDarkMode(false));
    }

    if (selectedTheme === null) {
      const systemTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      localStorage.setItem("theme", systemTheme ? "dark" : "light");
      dispatch(setDarkMode(systemTheme));
    }
  }, [isDark]);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="flex flex-col h-full w-full bg-bg dark:bg-darkbg px-20">
        <Nav
          className="h-auto"
          refs={{ aboutRef, skillsRef, projectsRef, contactRef, resumeRef }}
        />
        <Home
          className="h-full"
          refs={{ aboutRef, skillsRef, projectsRef, contactRef, resumeRef }}
        />
        <Footer className="h-auto" />
      </div>
    </div>
  );
}

export default App;
