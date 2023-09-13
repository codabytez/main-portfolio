import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Error = ({ error }) => {
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
      <div className="min-w-[250px] bg-primary rounded-2xl flex flex-col m-6 md:my-28 p-10 gap-6 justify-center items-center text-tertiary select-none">
        <h3 className="text-8xl pb-4 font-black">Oops</h3>
        <h4 className="sm:text-4xl text-3xl font-bold text-center">
          An Error Has Occured
        </h4>
        <p className="sm:text-3xl text-2xl font-bold text-center">
          {error.message}
        </p>
        <p className="sm:text-3xl text-2xl font-bold text-fuschia text-center">
          {error.code}
        </p>
      </div>
    </animated.div>
  );
};

export default Error;
