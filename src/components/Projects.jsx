import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Projects = ({ link, name, src, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(110px)",
  });

  return (
    <animated.div ref={ref} style={animation} className="text-center">
      <div className="bg-primary text-secondary p-6 m-6 rounded-3xl transition duration-200 hover:scale-105">
        <a className="inline-block " href={link}>
          <h3 className="text-center text-lg font-bold pb-2">{name}</h3>

          <div className="flex justify-center m-auto p-2">
            <img
              className="w-[200px] shadow-2xl border-2 border-secondary rounded-md"
              src={src}
              alt={`${src} Project Img`}
            />
          </div>
          <p className="text-sm pt-2">{description}</p>
        </a>
      </div>
    </animated.div>
  );
};

export default Projects;
