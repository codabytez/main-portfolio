import MacMenoji from "../assets/MacMemoji.svg";

const Logo = () => {
  return (
    <img
      src={MacMenoji}
      alt="MacMenoji"
      className="rounded-full w-40 h-40 flex items-center justify-center mx-auto aspect-auto"
    />
  );
};

export default Logo;
