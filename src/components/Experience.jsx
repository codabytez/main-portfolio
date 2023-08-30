import { experience } from "./credentials";
import Credential from "./Credential";

const Experience = () => {
  return (
    <ul className="relative">
      <div className="absolute bg-home h-full w-0.5 left-[23px]"></div>
      {experience.map(({ id, position, duration, company }) => (
        <Credential
          key={id}
          title={position}
          duration={duration}
          name={company}
        />
      ))}
    </ul>
  );
};

export default Experience;
