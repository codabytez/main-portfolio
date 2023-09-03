import { useState, useEffect } from "react";
import Projects from "./Projects";
import { project } from "./credentials";

const MyProjects = () => {
  const [projectsToShow, setProjectsToShow] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767 && window.innerWidth < 1023) {
        setProjectsToShow(project.slice(0, 2));
      } else {
        setProjectsToShow(project);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="grid lg:grid-cols-2 ">
      {projectsToShow.map(({ id, name, src, link, description }) => {
        return (
          <div className="" key={id}>
            <Projects
              name={name}
              src={src}
              link={link}
              description={description}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MyProjects;
