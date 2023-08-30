import Projects from "./Projects";
import { project } from "./credentials";

const MyProjects = () => {
  return (
    <div className="grid lg:grid-cols-2 ">
      {project.map(({ id, name, src, link, description }) => {
        return (
          <div
            className="bg-primary text-secondary p-6 m-6 rounded-3xl transition duration-200 hover:scale-105"
            key={id}
          >
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
