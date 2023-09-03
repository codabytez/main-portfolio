// the component is used for displaying the profile, links, education, and experience section.
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const InfoSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(110px)",
  });

  return (
    <animated.div ref={ref} style={animation}>
      <div
        className={
          "bg-primary text-secondary p-6 m-6 rounded-3xl transition duration-200 transform hover:scale-105"
        }
      >
        {children}
      </div>
    </animated.div>
  );
};
export default InfoSection;
