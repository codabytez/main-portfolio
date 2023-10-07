import Rocket from "../assets/rocket.svg";
const WelcomePage = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around lg:justify-evenly items-center overflow-hidden">
      <div className="flex flex-col justify-center items-center lg:gap-20 lg:h-[466px] mt-36 lg:w-1/2">
        <h1 className="uppercase text-secondary text-2xl lg:text-4xl xl:text-6xl leading-normal text-center">
          Welcome{" "}
          <span className="px-6 py-3 rounded-[60px] border border-[#9500ff] bg-gradient-to-r from-[#9500ff] to-[#c0f] font-bold leading-normal">
            Aboard
          </span>
        </h1>
        <div className="hidden lg:flex flex-col items-center gap-6">
          <p className="text-secondary text-center text-3xl leading-normal">
            Want to know more about me?
          </p>
          <p className="px-6 py-3 rounded-[60px] border border-[#9500ff] bg-gradient-to-r from-[#9500ff] to-[#c0f] font-bold text-2xl text-secondary">
            Hang on tight, we are taking off!
          </p>
        </div>
      </div>
      <div className="">
        <img src={Rocket} alt="rocket" className=" animate-pulse" />
      </div>
      <div className="lg:hidden flex flex-col items-center gap-5">
        <p className="text-secondary text-center text-lg leading-normal">
          A place where your dreams take a twist!
        </p>
        <p className="px-6 py-3 rounded-[60px] border border-[#9500ff] bg-gradient-to-r from-[#9500ff] to-[#c0f] font-bold">
          Hang on tight, we are taking off!
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;
