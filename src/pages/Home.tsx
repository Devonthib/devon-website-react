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
    <div className={className}>
      <div>INTRO</div>
      <div ref={refs.aboutRef} className="">
        About me
      </div>
      <div ref={refs.skillsRef} className="">
        Skills
      </div>
      <div ref={refs.projectsRef} className="">
        Projects
      </div>
      <div ref={refs.contactRef} className="">
        Contact
      </div>
      <div ref={refs.resumeRef} className="">
        Resume
      </div>
    </div>
  );
}

export default Home;
