import cn from "@utils/cn";
import { projectsData } from "@utils/data";
import PortItem from "@components/PortItem";
import Glow from "@components/ui/Glow";
import { useEffect } from "react";

interface PortfolioProps {
  className?: string;
  [rest: string]: any;
}

function Portfolio({ className, ...rest }: PortfolioProps) {
  return (
    <div className={cn("relative overflow-visible py-20", className)} {...rest}>
      <h2 className="text-3xl font-bold mb-6 gradient-text animate-gradient-loop">
        Portfolio
      </h2>
      <div className="relative">
        <div className="flex flex-col gap-24">
          {projectsData.map((project, index) => (
            <PortItem
              key={index}
              name={project.name}
              image={project.image}
              description={project.fullDescription}
              shortDescription={project.description}
              link={project.link}
              glowLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
