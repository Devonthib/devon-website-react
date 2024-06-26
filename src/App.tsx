import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@redux/store";
import Home from "@pages/Home";
import { useEffect, useRef } from "react";
import { setDarkMode } from "@redux/mainSlice";
import { Routes, Route } from "react-router-dom";

import Nav from "@components/Nav";
import Portfolio from "@pages/Portfolio";
import ContactIcons from "@components/ContactIcons";

import cn from "@utils/cn";
import ScrollTop from "@components/ScrollToTop";

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
        "",
        hamburgerOpen && "tablet:overflow-hidden tablet:no-scrollbar"
      )}
    >
      <div
        className={cn(
          "flex flex-col h-full w-full bg-bg text-text px-20 overflow-visible mobile:px-4",
          hamburgerOpen && "tablet:overflow-hidden tablet:no-scrollbar"
        )}
      >
        <Nav
          className="h-auto"
          refs={{ aboutRef, skillsRef, projectsRef, contactRef, resumeRef }}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                className="h-full overflow-visible"
                refs={{ aboutRef, skillsRef, projectsRef, contactRef, resumeRef }}
              />
            }
          />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <ContactIcons />
      </div>
    </div>
  );
}

export default App;
