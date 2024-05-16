import AboutMe from "@components/AboutMe";
import Contact from "@components/Contact";
import Footer from "@components/Footer";
import Intro from "@components/Intro";
import Projects from "@components/Projects";
import Skills from "@components/Skills";
import cn from "@utils/cn";

interface HomeProps {
  className?: string;
  refs: {
    aboutRef: React.RefObject<HTMLDivElement>;
    skillsRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
    resumeRef: React.RefObject<HTMLDivElement>;
  };
}

function Home({ className, refs }: HomeProps) {
  return (
    <div className={cn(className, "space-y-20")}>
      <Intro className="pt-20" />
      <AboutMe ref={refs.aboutRef} />
      <Skills ref={refs.skillsRef} />
      <Projects ref={refs.projectsRef} />
      <Contact ref={refs.contactRef} />
      <Footer />
    </div>
  );
}

export default Home;
