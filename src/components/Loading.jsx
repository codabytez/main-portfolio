import ReactLoading from "react-loading";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Loading = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(110px)",
  });

  return (
    <animated.div
      ref={ref}
      style={animation}
      className=" bg-primary rounded-2xl m-20 flex p-10 justify-center items-center select-none"
    >
      {" "}
      <span className="font-bold text-2xl pr-4 text-secondary">Loading</span>
      <ReactLoading type={"spinningBubbles"} color={"#CB92B1"} />
    </animated.div>
  );
};

export default Loading;
